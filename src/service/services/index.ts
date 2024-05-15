import request from "../config";
import { Request } from "@services-interface";


const services:Request = {
    post_worker:(params) => request.post("/v1/user", params),
    get_worker: (params)=>request.get( `/v1/users?page=${params.page}&limit=${params.limit}&name=${params.name}`),
    del_worker:(id)=>request.delete(`/v1/user/${id}`),
    update_worker:(id)=>request.put(`/v1/user/${id}`),
}

export default services 