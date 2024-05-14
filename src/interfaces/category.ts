export interface GetParamsCategory {
    page:number,
    limit:number
}

export interface PostParamsCategory{
    category_name:string,
    category_id?:string,
}

export interface UpdateData extends PostParamsCategory{
    category_id:string;
}


// ---------> Interface Srore Category <--------------------
export interface StoreCategory {
    isLoader:boolean;
    data:any[];
    totlCount:number;
    getData: (params:GetParamsCategory)=> Promise <any>;
    postData: (data:PostParamsCategory)=> Promise <any>;
    deleteData: (id:string)=> Promise <any>;
    updateData: (data:UpdateData)=> Promise <any>;
}



export interface Requests{
    get_category:(params:GetParamsCategory)=>any,
    post_category:(params:PostParamsCategory)=>any,
    del_category:(id:string) => any,
    update_category:(valyu:PostParamsCategory)=>any
}