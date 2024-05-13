import request from "../config";
import { Requests } from "../../interfaces/category";


const category:Requests = {
    get_category:(params) => request.get(`/v1/categories?page=${params.page}&limit=${params.limit}`),
    post_category: (params)=>request.post(`/v1/category`, params ),
    del_category:(id)=>request.delete(`/v1/category/${id}`),
    update_category:(id)=>request.put(`/v1/category?${id}`),
}

export default category 