import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import {IGetPlayerResponse, IGetPlayer} from "../../api/players/playersDto";
import {
    getPlayersThunk,
    addPlayersThunk,
    getPlayerIdThunk,
    editPlayersThunk,
    deletePlayersThunk
} from "./playersAction";
import {RootState} from "../../core/redux/store";


interface IState {
    player: IGetPlayerResponse | null;
    loadingPlayers: boolean;
    errorPlayers: string | undefined;
    count: number
}


export const playersAdapter = createEntityAdapter<IGetPlayer>();

const initialState = playersAdapter.getInitialState<IState>({
    player: null,
    loadingPlayers: false,
    errorPlayers: '',
    count: 0,
})


export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //getPlayers
        builder.addCase(getPlayersThunk.pending, (state) => {
            state.loadingPlayers = true;
            state.errorPlayers = '';
        });
        builder.addCase(getPlayersThunk.fulfilled, (state, action) => {
            state.loadingPlayers = false;
            playersAdapter.setAll(state, action.payload.data);
            state.count = action.payload.count;
        });
        builder.addCase(getPlayersThunk.rejected, (state, action) => {
            state.loadingPlayers = false;
            state.errorPlayers = action.error.message;
        });

        //getPlayerId
        builder.addCase(getPlayerIdThunk.pending, (state) => {
            state.loadingPlayers = true;
            state.errorPlayers = '';
        });
        builder.addCase(getPlayerIdThunk.fulfilled, (state, action) => {
            state.loadingPlayers = false;
            state.player = action.payload
        });
        builder.addCase(getPlayerIdThunk.rejected, (state, action) => {
            state.loadingPlayers = false;
            state.errorPlayers = action.error.message;
        });

        //addPlayers
        builder.addCase(addPlayersThunk.pending, (state) => {
            state.loadingPlayers = true;
            state.errorPlayers = '';
        });
        builder.addCase(addPlayersThunk.fulfilled, (state, action) => {
            state.loadingPlayers = false;
        });
        builder.addCase(addPlayersThunk.rejected, (state, action) => {
            state.loadingPlayers = false;
            state.errorPlayers = action.error.message;
        });

        //editPlayers
        builder.addCase(editPlayersThunk.pending, (state) => {
            state.loadingPlayers = true;
            state.errorPlayers = '';
        });
        builder.addCase(editPlayersThunk.fulfilled, (state, action) => {
            state.loadingPlayers = false;
            playersAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload
            })
        });
        builder.addCase(editPlayersThunk.rejected, (state, action) => {
            state.loadingPlayers = false;
            state.errorPlayers = action.error.message;
        });

        //deletePlayers
        builder.addCase(deletePlayersThunk.pending, (state) => {
            state.loadingPlayers = true;
            state.errorPlayers = '';
        });
        builder.addCase(deletePlayersThunk.fulfilled, (state, action) => {
            state.loadingPlayers = false;
            playersAdapter.removeOne(state, action.payload.id)
        });
        builder.addCase(deletePlayersThunk.rejected, (state, action) => {
            state.loadingPlayers = false;
            state.errorPlayers = action.error.message;
        });
    }
})

export const playersSelectros = playersAdapter.getSelectors<RootState>(state => state.players)
export default playersSlice.reducer;


// interface ITeams {
//     data: IGetPlayerResponse[];
//     count: number;
//     page: number;
//     size: number;
// }
//
// interface IState {
//     players: ITeams | null;
//     player: IGetPlayerResponse | null;
//     loadingPlayers: boolean;
//     errorPlayers: string | undefined;
// }
//
//
// const initialState: IState = {
//     players: null,
//     player: null,
//     loadingPlayers: false,
//     errorPlayers: '',
// };
//
// export const playersSlice = createSlice({
//     name: 'players',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         //getPlayers
//         builder.addCase(getPlayersThunk .pending, (state) => {
//             state.loadingPlayers = true;
//             state.errorPlayers = '';
//         });
//         builder.addCase(getPlayersThunk .fulfilled, (state, action) => {
//             state.loadingPlayers = false;
//             state.players = action.payload
//         });
//         builder.addCase(getPlayersThunk .rejected, (state, action) => {
//             state.loadingPlayers = false;
//             state.errorPlayers = action.error.message;
//         });
//
//         //getPlayerId
//         builder.addCase(getPlayerIdThunk .pending, (state) => {
//             state.loadingPlayers = true;
//             state.errorPlayers = '';
//         });
//         builder.addCase(getPlayerIdThunk .fulfilled, (state, action) => {
//             state.loadingPlayers = false;
//             state.player = action.payload
//         });
//         builder.addCase(getPlayerIdThunk .rejected, (state, action) => {
//             state.loadingPlayers = false;
//             state.errorPlayers = action.error.message;
//         });
//
//         //addPlayers
//         builder.addCase(addPlayersThunk .pending, (state) => {
//             state.loadingPlayers = true;
//             state.errorPlayers = '';
//         });
//         builder.addCase(addPlayersThunk .fulfilled, (state, action) => {
//             state.loadingPlayers = false;
//         });
//         builder.addCase(addPlayersThunk .rejected, (state, action) => {
//             state.loadingPlayers = false;
//             state.errorPlayers = action.error.message;
//         });
//
//         //editPlayers
//         builder.addCase(editPlayersThunk .pending, (state) => {
//             state.loadingPlayers = true;
//             state.errorPlayers = '';
//         });
//         builder.addCase(editPlayersThunk .fulfilled, (state, action) => {
//             state.loadingPlayers = false;
//         });
//         builder.addCase(editPlayersThunk .rejected, (state, action) => {
//             state.loadingPlayers = false;
//             state.errorPlayers = action.error.message;
//         });
//
//         //deletePlayers
//         builder.addCase(deletePlayersThunk .pending, (state) => {
//             state.loadingPlayers = true;
//             state.errorPlayers = '';
//         });
//         builder.addCase(deletePlayersThunk .fulfilled, (state, action) => {
//             state.loadingPlayers = false;
//         });
//         builder.addCase(deletePlayersThunk .rejected, (state, action) => {
//             state.loadingPlayers = false;
//             state.errorPlayers = action.error.message;
//         });
//     }
// })

