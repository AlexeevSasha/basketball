import {IAddTeam, IGetTeams, IRest} from "./teamsDto";
import {get, post, remove, put} from "../baseRequest";

export const getTeams = ({...rest}: IRest) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`)
    const {name, page, pageSize} = rest;
    const url = !name && !page && !pageSize ? 'api/Team/GetTeams' : `api/Team/GetTeams?Name=${name}&Page=${page}&PageSize=${pageSize}`
    return get(url, user.token);
}
export const getTeamId = (id: number) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`)
    return get(`api/Team/Get?id=${id}`, user.token);
}
export const addTeam = (data: IAddTeam) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`)
    return post("api/Team/Add", JSON.stringify(data), user.token);
}
export const upDateTeam = (data: IGetTeams) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`)
    return  put("api/Team/Update", JSON.stringify(data), user.token);
}
export const deleteTeam = (id: number) => {
    const user = JSON.parse(`${localStorage.getItem("user")}`)
    return remove(`api/Team/Delete?id=${id}`, user.token);
}
