import { FullFileBrowser, ChonkyActions, ChonkyFileActionData, FileData, FileHelper } from 'chonky';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import DemoFsMap from './demoFileSystemObj.json';
//import Button from '@material-ui/core/Button';
//import { showActionNotification } from '../util';

// Custom interfaces
interface CustomFileData extends FileData {
    parentId?: string;
    childrenIds?: string[];
}
interface CustomFileMap {
    [fileId: string]: CustomFileData;
}

// Helper method
const prepareCustomFileMap = () => {
    const baseFileMap = DemoFsMap.fileMap;
    const rootFolderId = DemoFsMap.rootFolderId;
    return { baseFileMap, rootFolderId };
};

// Hook for file map state and operations
const useCustomFileMap = () => {
    const { baseFileMap, rootFolderId } = useMemo(prepareCustomFileMap, []);

    const [fileMap, setFileMap] = useState(baseFileMap);
    const [currentFolderId, setCurrentFolderId] = useState(rootFolderId);

    const resetFileMap = useCallback(() => {
        setFileMap(baseFileMap);
        setCurrentFolderId(rootFolderId);
    }, [baseFileMap, rootFolderId]);

    const currentFolderIdRef = useRef(currentFolderId);
    useEffect(() => {
        currentFolderIdRef.current = currentFolderId;
    }, [currentFolderId]);

    const deleteFiles = useCallback((files) => {
        setFileMap((currentFileMap) => {
            const newFileMap = { ...currentFileMap };

            files.forEach((file) => {
                delete newFileMap[file.id];

                if (file.parentId) {
                    const parent = newFileMap[file.parentId];
                    const newChildrenIds = parent.childrenIds.filter(id => id !== file.id);
                    newFileMap[file.parentId] = {
                        ...parent,
                        childrenIds: newChildrenIds,
                        childrenCount: newChildrenIds.length,
                    };
                }
            });

            return newFileMap;
        });
    }, []);

    const moveFiles = useCallback((files, source, destination) => {
        setFileMap((currentFileMap) => {
            const newFileMap = { ...currentFileMap };
            const moveFileIds = new Set(files.map(f => f.id));

            const newSourceChildrenIds = source.childrenIds.filter(id => !moveFileIds.has(id));
            newFileMap[source.id] = {
                ...source,
                childrenIds: newSourceChildrenIds,
                childrenCount: newSourceChildrenIds.length,
            };

            const newDestinationChildrenIds = [...destination.childrenIds, ...files.map(f => f.id)];
            newFileMap[destination.id] = {
                ...destination,
                childrenIds: newDestinationChildrenIds,
                childrenCount: newDestinationChildrenIds.length,
            };

            files.forEach(file => {
                newFileMap[file.id] = {
                    ...file,
                    parentId: destination.id,
                };
            });

            return newFileMap;
        });
    }, []);

    const idCounter = useRef(0);
    const createFolder = useCallback((folderName) => {
        setFileMap((currentFileMap) => {
            const newFileMap = { ...currentFileMap };

            const newFolderId = `new-folder-${idCounter.current++}`;
            newFileMap[newFolderId] = {
                id: newFolderId,
                name: folderName,
                isDir: true,
                modDate: new Date(),
                parentId: currentFolderIdRef.current,
                childrenIds: [],
                childrenCount: 0,
            };

            const parent = newFileMap[currentFolderIdRef.current];
            newFileMap[currentFolderIdRef.current] = {
                ...parent,
                childrenIds: [...parent.childrenIds, newFolderId],
            };

            return newFileMap;
        });
    }, []);

    return {
        fileMap,
        currentFolderId,
        setCurrentFolderId,
        resetFileMap,
        deleteFiles,
        moveFiles,
        createFolder,
    };
};

const useFiles = (fileMap, currentFolderId) => {
    return useMemo(() => {
        const currentFolder = fileMap[currentFolderId];
        const childrenIds = currentFolder.childrenIds;
        const files = childrenIds.map(fileId => fileMap[fileId]);
        return files;
    }, [currentFolderId, fileMap]);
};

const useFolderChain = (fileMap, currentFolderId) => {
    return useMemo(() => {
        const currentFolder = fileMap[currentFolderId];

        const folderChain = [currentFolder];

        let parentId = currentFolder.parentId;
        while (parentId) {
            const parentFile = fileMap[parentId];
            if (parentFile) {
                folderChain.unshift(parentFile);
                parentId = parentFile.parentId;
            } else {
                break;
            }
        }

        return folderChain;
    }, [currentFolderId, fileMap]);
};

const useFileActionHandler = (
    setCurrentFolderId,
    deleteFiles,
    moveFiles,
    createFolder
) => {
    return useCallback((data) => {
        if (data.id === ChonkyActions.OpenFiles.id) {
            const { targetFile, files } = data.payload;
            const fileToOpen = targetFile ?? files[0];
            if (fileToOpen && FileHelper.isDirectory(fileToOpen)) {
                setCurrentFolderId(fileToOpen.id);
                return;
            }
        } else if (data.id === ChonkyActions.DeleteFiles.id) {
            deleteFiles(data.state.selectedFilesForAction);
        } else if (data.id === ChonkyActions.MoveFiles.id) {
            moveFiles(data.payload.files, data.payload.source, data.payload.destination);
        } else if (data.id === ChonkyActions.CreateFolder.id) {
            const folderName = prompt('Provide the name for your new folder:');
            if (folderName) createFolder(folderName);
        }

        console.log(data);
    }, [createFolder, deleteFiles, moveFiles, setCurrentFolderId]);
};

const VFSBrowser = (props) => {
    const {
        fileMap,
        currentFolderId,
        setCurrentFolderId,
        resetFileMap,
        deleteFiles,
        moveFiles,
        createFolder,
    } = useCustomFileMap();
    const files = useFiles(fileMap, currentFolderId);
    const folderChain = useFolderChain(fileMap, currentFolderId);
    const handleFileAction = useFileActionHandler(
        setCurrentFolderId,
        deleteFiles,
        moveFiles,
        createFolder
    );
    const fileActions = useMemo(() => [ChonkyActions.CreateFolder, ChonkyActions.DeleteFiles], []);
    const thumbnailGenerator = useCallback(
        (file) => (file.thumbnailUrl ? `https://chonky.io${file.thumbnailUrl}` : null),
        []
    );

    return (
        <>
            <button
                size="small"
                color="primary"
                variant="contained"
                onClick={resetFileMap}
                style={{ marginBottom: 15 }}
            >
                Reset file map
            </button>
            <div style={{ 
                height: '400px',
                marginTop: '100px' }}>
                <FullFileBrowser
                    files={files}
                    folderChain={folderChain}
                    fileActions={fileActions}
                    onFileAction={handleFileAction}
                    thumbnailGenerator={thumbnailGenerator}
                    {...props}
                />
            </div>
        </>
    );
};

export default VFSBrowser;
