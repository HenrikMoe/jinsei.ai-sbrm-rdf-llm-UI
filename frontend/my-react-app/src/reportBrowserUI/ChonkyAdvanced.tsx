import {
    ChonkyActions,
    ChonkyFileActionData,
    FileArray,
    FileBrowserProps,
    FileData,
    FileHelper,
    FullFileBrowser,
    ChonkyIconFA,
} from 'chonky';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import DemoFsMap from './chonkySubPackViewerConfig.json';
import { setChonkyDefaults } from 'chonky';
import './DarkTheme.css';

setChonkyDefaults({
    disableDragAndDrop: true,
    defaultFileViewActionId: ChonkyActions.EnableListView.id,
});

interface CustomFileData extends FileData {
    parentId?: string;
    childrenIds?: string[];
}
interface CustomFileMap {
    [fileId: string]: CustomFileData;
}

const prepareCustomFileMap = () => {
    const baseFileMap = (DemoFsMap.fileMap as unknown) as CustomFileMap;
    const rootFolderId = DemoFsMap.rootFolderId;
    return { baseFileMap, rootFolderId };
};

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

    const deleteFiles = useCallback((files: CustomFileData[]) => {
        setFileMap((currentFileMap) => {
            const newFileMap = { ...currentFileMap };

            files.forEach((file) => {
                delete newFileMap[file.id];

                if (file.parentId) {
                    const parent = newFileMap[file.parentId]!;
                    const newChildrenIds = parent.childrenIds!.filter(
                        (id) => id !== file.id
                    );
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

    const moveFiles = useCallback(
        (
            files: CustomFileData[],
            source: CustomFileData,
            destination: CustomFileData
        ) => {
            setFileMap((currentFileMap) => {
                const newFileMap = { ...currentFileMap };
                const moveFileIds = new Set(files.map((f) => f.id));

                const newSourceChildrenIds = source.childrenIds!.filter(
                    (id) => !moveFileIds.has(id)
                );
                newFileMap[source.id] = {
                    ...source,
                    childrenIds: newSourceChildrenIds,
                    childrenCount: newSourceChildrenIds.length,
                };

                const newDestinationChildrenIds = [
                    ...destination.childrenIds!,
                    ...files.map((f) => f.id),
                ];
                newFileMap[destination.id] = {
                    ...destination,
                    childrenIds: newDestinationChildrenIds,
                    childrenCount: newDestinationChildrenIds.length,
                };

                files.forEach((file) => {
                    newFileMap[file.id] = {
                        ...file,
                        parentId: destination.id,
                    };
                });

                return newFileMap;
            });
        },
        []
    );

    const idCounter = useRef(0);
    const createFolder = useCallback((folderName: string) => {
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
                childrenIds: [...parent.childrenIds!, newFolderId],
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

export const useFiles = (
    fileMap: CustomFileMap,
    currentFolderId: string
): FileArray => {
    return useMemo(() => {
        const currentFolder = fileMap[currentFolderId];
        const childrenIds = currentFolder.childrenIds!;
        const files = childrenIds.map((fileId: string) => fileMap[fileId]);
        return files;
    }, [currentFolderId, fileMap]);
};

export const useFolderChain = (
    fileMap: CustomFileMap,
    currentFolderId: string
): FileArray => {
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

export const useFileActionHandler = (
    setCurrentFolderId: (folderId: string) => void,
    deleteFiles: (files: CustomFileData[]) => void,
    moveFiles: (files: FileData[], source: FileData, destination: FileData) => void,
    createFolder: (folderName: string) => void
) => {
    return useCallback(
        (data: ChonkyFileActionData) => {
            if (data.id === ChonkyActions.OpenFiles.id) {
                const { targetFile, files } = data.payload;
                const fileToOpen = targetFile ?? files[0];
                if (fileToOpen && FileHelper.isDirectory(fileToOpen)) {
                    setCurrentFolderId(fileToOpen.id);
                    return;
                }
            } else if (data.id === ChonkyActions.DeleteFiles.id) {
                deleteFiles(data.state.selectedFilesForAction!);
            } else if (data.id === ChonkyActions.MoveFiles.id) {
                moveFiles(
                    data.payload.files,
                    data.payload.source!,
                    data.payload.destination
                );
            } else if (data.id === ChonkyActions.CreateFolder.id) {
                const folderName = prompt('Provide the name for your new folder:');
                if (folderName) createFolder(folderName);
            }

            console.log(data);
        },
        [createFolder, deleteFiles, moveFiles, setCurrentFolderId]
    );
};

export type VFSProps = Partial<FileBrowserProps>;

export const VFSBrowser: React.FC<VFSProps> = React.memo((props) => {
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
    const fileActions = useMemo(
        () => [ChonkyActions.CreateFolder, ChonkyActions.DeleteFiles],
        []
    );
    const thumbnailGenerator = useCallback(
        (file: FileData) =>
            file.thumbnailUrl ? `https://chonky.io${file.thumbnailUrl}` : null,
        []
    );

    return (
        <div className="chonky-dark-theme">
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
            <h3 style={{color: 'white'}}>Active Subpack</h3>
            <button
                style={{ marginRight: '10px', marginTop: '15px', marginBottom: '15px', marginLeft: '10px',padding: '0px' }}
                onClick={resetFileMap}
            >
                Reset file map
            </button>
            </div>
            <div style={{ height: '400px', marginTop: '10px' }}>
            <FullFileBrowser
                files={files}
                folderChain={folderChain}
                fileActions={fileActions}
                onFileAction={handleFileAction}
                thumbnailGenerator={thumbnailGenerator}
                {...props}
            />
        </div>
    </div>
);
});

export default VFSBrowser;
