export interface GetParamsProduct{
    page:number,
    limit:number,
    // name:""
}

export interface PostParamsProduct{
    age_max:number,
    age_min:number,
    category_id:string,
    color:string,
    cost:number,
    count:number,
    description:string,
    discount:number,
    for_gender:string,
    made_in:string,
    product_name:string,
    size:number
}

export interface RequestCategory{
    get_product:(params:GetParamsProduct)=>any,
    post_product:(params:PostParamsProduct)=>any,
    del_product:(id:string)=>any,
    update_product:(id:string)=>any,
}