import * as core from './core';

const api = {
    ...core,
};

declare global {
    interface Window {
        mzBinarySearch: typeof api,
    }
}

window.mzBinarySearch = window.mzBinarySearch || api;

export * from './core';