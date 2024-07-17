import { FullFileBrowser } from 'chonky';

const MyFileBrowser = () => {
    const files = [
        { id: 'lht', name: 'Projects', isDir: true },
        {
            id: 'mcd',
            name: 'chonky-sphere-v2.png',
            thumbnailUrl: 'https://chonky.io/chonky-sphere-v2.png',
        },
    ];
    const folderChain = [{ id: 'xcv', name: 'Demo', isDir: true }];
    return (
        <div style={{ height: '300px', 
        marginTop: '100px' }}>
            <FullFileBrowser files={files} folderChain={folderChain} />
        </div>
    );
};

export default MyFileBrowser;
