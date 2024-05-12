import request from "../config";
import { Request } from "@services-interface";


const services:Request = {
    post_worker:(params) => request.post("/v1/user", params),
    get_worker: (params)=>request.get( `/v1/users?page=${params.page}&limit=${params.limit}`),///v1/users?page=1&limit=10
    del_worker:(id)=>request.delete(`/v1/user/${id}`)
}

export default services 