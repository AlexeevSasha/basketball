export interface IAddPlayer {
    "name": string;
    "number": number;
    "position": string;
    "team": number;
    "birthday": string;
    "height": number;
    "weight": number;
    "avatarUrl": string;
}

export interface IGetPlayer extends IAddPlayer {
    id: number;
}

export interface IGetPlayerResponse extends IGetPlayer {
    teamName: string;
}

export interface IRest {
    page?: number
    pageSize?: number,
    name?: string;
    teamIds?: string;
}