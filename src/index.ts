import * as core from './core';

const api = {
    ...core,
};

declare global {
    interface Window {
        mzDP: typeof api,
    }
}

window.mzDP = window.mzDP || api;

export * from './core';