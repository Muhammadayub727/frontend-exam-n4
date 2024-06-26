import { getDataFromCookie } from "@data-service";
import axios from "axios";

const request = axios.create({
    baseURL: "http://store.go-clothes.uz:5555"
})

request.interceptors.request.use((config)=>{
    const token = getDataFromCookie("token")

    if(token){
        config.headers["Authorization"] = token
    }

    return config
})

export default request