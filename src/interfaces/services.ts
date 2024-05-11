export interface PostParams {
    email:string,
    first_name:string,
    gender:string,
    last_name:string,
    password:string
}



export interface Request{
    post_workers:(params:PostParams)=>any,
}