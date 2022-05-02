export interface IAddTeam {
    "name": string
    "foundationYear": number
    "division": string
    "conference": string
    "imageUrl": string
}

export interface IGetTeams extends IAddTeam {
    id: number;
}

export interface IRest {
    page?: number
    pageSize?: number,
    name?: string;
}