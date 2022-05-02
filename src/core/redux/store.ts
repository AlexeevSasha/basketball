import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../../modules/authorization/authorizationSlice";
import teamsSlice from "../../modules/teams/teamsSlice";
import playersSlice from "../../modules/players/playersSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        teams: teamsSlice,
        players: playersSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


