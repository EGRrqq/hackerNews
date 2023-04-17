export interface IComment {
    id: number;
    kids: Array<number>;
    time: number;
    parent: number;
    text: string;
    type: string;
    deleted?: boolean;
}

export interface INews {
    id: number;
    title: string;
    score: number;
    by: string;
    time: number;
    url: string;
    kids: Array<IComment>;
    type: string;
}
