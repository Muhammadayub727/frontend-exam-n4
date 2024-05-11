export interface PostParams {
    email:string,
    first_name:string,
    gender:string,
    last_name:string,
    password:string
}

interface GetParams{
    page:number,
    limit:number
}



export interface Request{
    post_workers:(params:PostParams)=>any,
    get_worker:(params:GetParams)=>any,
}