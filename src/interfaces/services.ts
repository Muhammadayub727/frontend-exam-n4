export interface PostParams {
    email:string,
    first_name:string,
    gender:string,
    last_name:string,
    password:string
}

interface GetParams{
    page:number,
    limit:number,
    name:string
}




export interface Request{
    post_worker:(params:PostParams)=>any,
    get_worker:(params:GetParams)=>any,
    del_worker:(id:string) => any,
    update_worker:(id:string)=>any,
}