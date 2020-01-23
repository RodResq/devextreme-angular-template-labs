import CustomStore from 'devextreme/data/custom_store';

export class DataSourceConfig<T> {
    store?: CustomStore;
    // paginate?: boolean;
    // pageSize?: number;
    sort?: string | { selector: string, desc: boolean }[];
    filter?: any;
    map?: (object: T) => any;
}