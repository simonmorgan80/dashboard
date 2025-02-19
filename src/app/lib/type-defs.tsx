export type DataTableType = {
    title: string;
    columns: {
        id: string;
        label: string;
    }[];
    data: DataItemType[]
}

export type DataTableItemType = {
    [key: string]: any
    columns: {
        id: string;
        label: string;
    }[],
    dataItem: DataItemType
}

export type DataItemType = {
    [key: string]: any
    id: string;
    data_1: string;
    data_2: string;
    data_3: string;
    subdatasets?: {
        [key: string]: any
        data_1: string;
        data_2: string;
        data_3: string
    }[]
}

export type NotificationType = {
    title: string;
    message?: string;
}