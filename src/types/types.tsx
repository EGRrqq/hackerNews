export interface IComment {
    by: string;
    id: number;
    kids: Array<number>;
    time: number;
    parent: number;
    text: string;
    type: string;
    deleted?: boolean;
    dead?: boolean;
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
