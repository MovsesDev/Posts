import axios from "axios";

const instance = axios.create({
    baseURL: "https://629dd8753dda090f3c0ce5f3.mockapi.io"
}) 

export const getPosts =  async () => {
    try {
        const res = await instance.get('/goods');
        return res.data
    } catch (e) {
        console.log(e);
    }
}