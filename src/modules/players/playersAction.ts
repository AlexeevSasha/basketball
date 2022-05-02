import {createAsyncThunk} from "@reduxjs/toolkit";
import {addPlayers, getPlayerId, getPlayers, upDatePlayer, deletePlayer} from "../../api/players/playersService";
import {IAddPlayer, IGetPlayer, IRest} from "../../api/players/playersDto";


export const getPlayersThunk = createAsyncThunk(
    "players/getPlayers",
    async ({...rest}: IRest) => {
        const response = await getPlayers(rest);
        return response;
    },
);

export const getPlayerIdThunk = createAsyncThunk(
    "players/getPlayerId",
    async (id: number) => {
        const response = await getPlayerId(id);
        return response;
    },
);
export const addPlayersThunk = createAsyncThunk(
    "players/addPlayers",
    async ({data, callback}: { data: IAddPlayer, callback: () => void }) => {
        const response = await addPlayers(data);
        callback()
        return response;
    },
);

export const editPlayersThunk = createAsyncThunk(
    "players/editPlayers",
    async ({data, callback}: { data: IGetPlayer, callback: () => void }) => {
        const response = await upDatePlayer(data);
        callback()
        return response;
    },
);

export const deletePlayersThunk = createAsyncThunk(
    "players/deletePlayers",
    async ({id, callback}: { id: number, callback: () => void }) => {
        const response = await deletePlayer(id);
        callback();
        return response;
    },
);


