import request from "../config";
import { Request } from "@services-interface";


const services:Request = {
    post_workers:(params) => request.post("/v1/worker",{params}),
    get_worker: (params)=>request.get( `/v1/users?page=${params.page}&limit=${params.limit}`)
}

export default services 