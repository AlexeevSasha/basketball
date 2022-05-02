import {post, get, put, remove} from "../baseRequest";
import {IAddPlayer, IGetPlayer, IRest} from "./playersDto";

export const getPlayers = ({...rest}: IRest) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`)
    const {page, pageSize, name, teamIds} = rest;
    const url = !name && !page && !pageSize && !teamIds ? 'api/Player/GetPlayers' : `api/Player/GetPlayers?Name=${name}${teamIds}&Page=${page}&PageSize=${pageSize}`
    return get(url, user.token)
}
export const addPlayers = (data: IAddPlayer) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`)
    return post('api/Player/Add', JSON.stringify(data), user.token)
}
export const getPlayerId = (id: number) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`)
    return get(`api/Player/Get?id=${id}`, user.token);
}
export const upDatePlayer = (data: IGetPlayer) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`)
    return put("api/Player/Update", JSON.stringify(data), user.token);
}
export const deletePlayer = (id: number) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`)
    return remove(`api/Player/Delete?id=${id}`, user.token);
}