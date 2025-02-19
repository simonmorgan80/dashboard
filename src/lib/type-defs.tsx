export type DataTableType = {
    title: string;
    columns: {
        id: string;
        label: string;
    }[];
    data: DataItemType[]
}

export type DataTableItemType = {
    
    columns: {
        id: string;
        label: string;
    }[],
    // [key: string]: string;
    dataItem: DataItemType
}

export type DataItemType = {
    id: string;
    data_1: string;
    data_2: string;
    data_3: string;
    subdatasets?: {
        [key: string]: string;
        data_1: string;
        data_2: string;
        data_3: string;
    }[];
    [key: string]: string | undefined | { data_1: string; data_2: string; data_3: string }[];
};

export type NotificationType = {
    title: string;
    message?: string;
}