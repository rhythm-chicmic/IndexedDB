import type { RxStorage } from "rxdb";

export type EnvironmentParams = {
    // identifer to check if correct environment is loaded
    name : string,
    isCapacitor : boolean,
    production : boolean,
    isServerSideRendering : boolean,
    rxdbSyncUrl : string;

    // RxDB database settings
    multiInstance : boolean,
    addRxDBPlugins : () => void;
    getRxStorage : () => RxStorage<any,any>;
}