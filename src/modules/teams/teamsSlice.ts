import {createSlice, createEntityAdapter, EntityState} from "@reduxjs/toolkit";
import {IGetTeams} from "../../api/teams/teamsDto";
import {RootState} from "../../core/redux/store";
import {
    getTeamsThunk,
    addTeamThunk,
    teamOptionThunk,
    getTeamIdThunk,
    deleteTeamThunk,
    editTeamThunk
} from "./teamsAction";


interface IOption {
    value: number;
    label: string;
}

interface IState {
    team: IGetTeams | null;
    teamOption: IOption[];
    loadingTeams: boolean;
    errorTeams: string | undefined;
    count: number;
}

export const teamsAdapter = createEntityAdapter<IGetTeams>();


const initialState = teamsAdapter.getInitialState<IState>({
    team: null,
    teamOption: [],
    loadingTeams: false,
    errorTeams: '',
    count: 0,
})

export const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //getTeams
        builder.addCase(getTeamsThunk.pending, (state) => {
            state.loadingTeams = true;
            state.errorTeams = '';
        });
        builder.addCase(getTeamsThunk.fulfilled, (state, action) => {
            state.loadingTeams = false;
            teamsAdapter.setAll(state, action.payload.data)
            state.count = action.payload.count;
        });
        builder.addCase(getTeamsThunk.rejected, (state, action) => {
            state.loadingTeams = false;
            state.errorTeams = action.error.message;
        });

        //getTeamId
        builder.addCase(getTeamIdThunk.pending, (state) => {
            state.loadingTeams = true;
        });
        builder.addCase(getTeamIdThunk.fulfilled, (state, action) => {
            state.team = action.payload;
            state.loadingTeams = false;
        });
        builder.addCase(getTeamIdThunk.rejected, (state, action) => {
            state.loadingTeams = false;
            state.errorTeams = action.error.message;
        });

        //addteam
        builder.addCase(addTeamThunk.pending, (state) => {
            state.loadingTeams = true;
            state.errorTeams = '';
        });
        builder.addCase(addTeamThunk.fulfilled, (state) => {
            state.loadingTeams = false;
        });
        builder.addCase(addTeamThunk.rejected, (state, action) => {
            state.loadingTeams = false;
            state.errorTeams = action.error.message;
        });

        //editteam
        builder.addCase(editTeamThunk.pending, (state) => {
            state.loadingTeams = true;
            state.errorTeams = '';
        });
        builder.addCase(editTeamThunk.fulfilled, (state, action) => {
            state.loadingTeams = false;
            teamsAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload
            })
        });
        builder.addCase(editTeamThunk.rejected, (state, action) => {
            state.loadingTeams = false;
            state.errorTeams = action.error.message;
        });

        //deleteTeam
        builder.addCase(deleteTeamThunk.pending, (state) => {
            state.loadingTeams = true;
            state.errorTeams = '';
        });
        builder.addCase(deleteTeamThunk.fulfilled, (state, action) => {
            teamsAdapter.removeOne(state, action.payload.id)
            state.loadingTeams = false;
        });
        builder.addCase(deleteTeamThunk.rejected, (state, action) => {
            state.loadingTeams = false;
            state.errorTeams = action.error.message;
        });

        //teamOption
        builder.addCase(teamOptionThunk.pending, (state) => {
            state.loadingTeams = true;
            state.errorTeams = '';
        });
        builder.addCase(teamOptionThunk.fulfilled, (state, action) => {
            state.loadingTeams = false;
            state.teamOption = action.payload.data.map((elem: IGetTeams) => ({value: elem.id, label: elem.name}))
        });
        builder.addCase(teamOptionThunk.rejected, (state, action) => {
            state.loadingTeams = false;
            state.errorTeams = action.error.message;
        });
    }
})

export const teamsSelectros = teamsAdapter.getSelectors<RootState>(state => state.teams)
export default teamsSlice.reducer;


// interface ITeams {
//     data:IGetTeams[];
//     count: number;
//     page: number;
//     size: number;
// }

// interface IState {
//     teams: ITeams | null;
//     team: IGetTeams | null;
//     teamOption: IOption[];
//     loadingTeams: boolean;
//     errorTeams: string | undefined;
// }
//
// const initialState: IState = {
//     teams: null,
//     team: null,
//     teamOption: [],
//     loadingTeams: false,
//     errorTeams: '',
// };

// export const teamsSlice = createSlice({
//     name: 'teams',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         //getTeams
//         builder.addCase(getTeamsThunk.pending, (state) => {
//             state.loadingTeams = true;
//             state.errorTeams = '';
//         });
//         builder.addCase(getTeamsThunk.fulfilled, (state, action) => {
//             state.loadingTeams = false;
//             state.teams = action.payload;
//         });
//         builder.addCase(getTeamsThunk.rejected, (state, action) => {
//             state.loadingTeams = false;
//             state.errorTeams = action.error.message;
//         });
//
//         //getTeamId
//         builder.addCase(getTeamIdThunk.pending, (state) => {
//             state.loadingTeams = true;
//         });
//         builder.addCase(getTeamIdThunk.fulfilled, (state, action) => {
//             state.team = action.payload;
//             state.loadingTeams = false;
//         });
//         builder.addCase(getTeamIdThunk.rejected, (state, action) => {
//             state.loadingTeams = false;
//             state.errorTeams = action.error.message;
//         });
//
//         //addteam
//         builder.addCase(addTeamThunk.pending, (state) => {
//             state.loadingTeams = true;
//             state.errorTeams = '';
//         });
//         builder.addCase(addTeamThunk.fulfilled, (state) => {
//             state.loadingTeams = false;
//         });
//         builder.addCase(addTeamThunk.rejected, (state, action) => {
//             state.loadingTeams = false;
//             state.errorTeams = action.error.message;
//         });
//
//         //editteam
//         builder.addCase(editTeamThunk.pending, (state) => {
//             state.loadingTeams = true;
//             state.errorTeams = '';
//         });
//         builder.addCase(editTeamThunk.fulfilled, (state) => {
//             state.loadingTeams = false;
//         });
//         builder.addCase(editTeamThunk.rejected, (state, action) => {
//             state.loadingTeams = false;
//             state.errorTeams = action.error.message;
//         });
//
//         //deleteTeam
//         builder.addCase(deleteTeamThunk.pending, (state) => {
//             state.loadingTeams = true;
//             state.errorTeams = '';
//         });
//         builder.addCase(deleteTeamThunk.fulfilled, (state, action) => {
//             state.loadingTeams = false;
//         });
//         builder.addCase(deleteTeamThunk.rejected, (state, action) => {
//             state.loadingTeams = false;
//             state.errorTeams = action.error.message;
//         });
//
//         //teamOption
//         builder.addCase(teamOptionThunk.pending, (state) => {
//             state.loadingTeams = true;
//             state.errorTeams = '';
//         });
//         builder.addCase(teamOptionThunk.fulfilled, (state, action) => {
//             state.loadingTeams = false;
//             state.teamOption = action.payload.data.map((elem : IGetTeams) => ({value: elem.id, label: elem.name}))
//         });
//         builder.addCase(teamOptionThunk.rejected, (state, action) => {
//             state.loadingTeams = false;
//             state.errorTeams = action.error.message;
//         });
//     }
// })
// export default teamsSlice.reducer;

