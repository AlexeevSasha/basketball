import {post} from "../baseRequest";

const user = JSON.parse(`${localStorage.getItem("user")}`)

export const saveImages = (fileImg: File) => {
    const formData = new FormData();
    formData.append("file", fileImg);
    return post('api/Image/SaveImage', formData, user.token)
}