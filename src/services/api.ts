import axios from "axios";

export const api = axios.create({
    baseURL: `${process.env.API_URL}`,
    headers: {
        Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
        "Accept-Version": "v1",
    },
});
