import axios from "axios";

const baseURL =
    process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_URL_PROD
        : process.env.NEXT_PUBLIC_API_URL_DEV;

const api = axios.create({
    baseURL,
    withCredentials: true, // 필요 시 쿠키 포함
});

export default api;
