import request from "../config";
import { RequestCategory } from "../../interfaces/product";


const product:RequestCategory = {
    get_product: (params)=>request.get( `/v1/products?page=${params.page}&limit=${params.limit}&name=${params.name}`),
    post_product:(params) => request.post("/v1/product", params),
    del_product:(id)=>request.delete(`/v1/product/${id}`),
    update_product:(id)=>request.put(`/v1/product/${id}`),
}

export default product 