import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/", // I have doubt using type 
    // timeout: window.appSettings.API_CONFIG.TIMEOUT,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
});

export const get = async (url) => {
    try {
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const post = async (url, data) => {
    try {
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};