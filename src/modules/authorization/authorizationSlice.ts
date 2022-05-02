import {createSlice} from "@reduxjs/toolkit";
import {IUserResponse} from "../../api/auth/authDto";
import {loginThunk, registerThunk} from './authorizationAction'

interface IAuth {
    user: IUserResponse | null;
    loadingAuth: boolean;
    errorAuth: string | undefined;
}

const initialState: IAuth = {
    user: JSON.parse(`${localStorage.getItem("user")}`) || null,
    loadingAuth: false,
    errorAuth: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signOut(state): void {
            localStorage.removeItem("user");
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        //singIn
        builder.addCase(loginThunk.pending, (state) => {
            state.loadingAuth = true;
            state.errorAuth = '';
        });
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.loadingAuth = false;
            state.user = action.payload;
        });
        builder.addCase(loginThunk.rejected, (state, action) => {
            state.loadingAuth = false;
            state.errorAuth = action.error.message;
        });
        //singUp
        builder.addCase(registerThunk.pending, (state) => {
            state.loadingAuth = true;
            state.errorAuth = '';
        });
        builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.loadingAuth = false;
            state.user = action.payload;
        });
        builder.addCase(registerThunk.rejected, (state, action) => {
            state.loadingAuth = false;
            state.errorAuth = action.error.message;
        });

    }
})

export const {signOut} = authSlice.actions;
export default authSlice.reducer