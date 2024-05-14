export interface GetParamsCategory {
    page:number,
    limit:number
}

export interface PostParamsCategory{
    category_name:string,
    category_id?:string,
}


export interface Requests{
    get_category:(params:GetParamsCategory)=>any,
    post_category:(params:PostParamsCategory)=>any,
    del_category:(id:string) => any,
    update_category:(valyu:PostParamsCategory)=>any
}