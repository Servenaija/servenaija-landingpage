import { useContext } from 'react';
import { DownloadAppContext } from './download-app-context';
export function useDownloadApp() {
    const ctx = useContext(DownloadAppContext);
    if (!ctx) {
        throw new Error('useDownloadApp must be used within a DownloadAppProvider');
    }
    return ctx;
}
