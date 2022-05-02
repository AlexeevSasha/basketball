import {ISignIn, ISignUp} from "./authDto";
import {post} from "../baseRequest";

export const signIn = (data: ISignIn) => {
    return post('api/Auth/SignIn', JSON.stringify(data))
}
export const signUp = (data: ISignUp) => {
    return post('api/Auth/SignUp', JSON.stringify(data))
}