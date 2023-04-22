export interface IComment {
    by: string;
    id: number;
    kids: number[];
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
    kids: number[];
    type: string;
}
