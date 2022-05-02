import {createAsyncThunk} from "@reduxjs/toolkit";
import {ISignUp, ISignIn} from "../../api/auth/authDto";
import {signIn, signUp} from "../../api/auth/authService";


export const registerThunk = createAsyncThunk(
    "auth/signUp",
    async (data: ISignUp) => {
        const response = await signUp(data);
        localStorage.setItem("user", JSON.stringify(response));
        return response;
    },
);

export const loginThunk = createAsyncThunk(
    "auth/signIn",
    async (data: ISignIn, thunkApi) => {
        const response = await signIn(data);
        localStorage.setItem("user", JSON.stringify(response));
        return response;
    },
);