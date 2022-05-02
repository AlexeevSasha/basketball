import {createAsyncThunk} from "@reduxjs/toolkit";
import {addTeam, deleteTeam, getTeamId, getTeams, upDateTeam} from "../../api/teams/teamsServise";
import {IAddTeam, IGetTeams, IRest} from "../../api/teams/teamsDto";


export const getTeamsThunk = createAsyncThunk(
    "teams/getTeams",
    async ({...rest}: IRest) => {
        const response = await getTeams(rest);
        return response;
    },
);

export const getTeamIdThunk = createAsyncThunk(
    "teams/getTeamId",
    async (id: number) => {
        const response = await getTeamId(id);
        return response;
    },
);

export const addTeamThunk = createAsyncThunk(
    "teams/addTeam",
    async ({data, callback}: { data: IAddTeam, callback: () => void }) => {
        const response = await addTeam(data);
        callback()
        return response;
    },
);

export const editTeamThunk = createAsyncThunk(
    "teams/editTeam",
    async ({data, callback}: { data: IGetTeams, callback: () => void }) => {
        const response = await upDateTeam(data);
        callback()
        return response;
    },
);

export const deleteTeamThunk = createAsyncThunk(
    "teams/deleteTeam",
    async ({id, callback}: { id: number, callback: () => void }) => {
        const response = await deleteTeam(id);
        callback()
        return response;
    },
);


export const teamOptionThunk = createAsyncThunk(
    "teams/teamOption",
    async () => {
        const response = await getTeams({});
        return response;
    },
);

