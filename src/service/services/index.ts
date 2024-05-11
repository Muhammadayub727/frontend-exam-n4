import request from "../config";
import { Request } from "@services-interface";


const services:Request = {
    post_workers:(params) => request.post("/v1/worker",{params}),
}

export default services 