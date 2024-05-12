export interface ModalProps {
    open : boolean
    handleClose : () => void
}



export interface createWorkers{
        email: string,
        first_name: string,
        gender: string,
        last_name: string,
        password: string
}


interface Header{
    title : string
    value : string
}

interface BodyItem {
    id: string
    [key: string]: any
}

export interface TableProps{
    headers : Header[];
    body : BodyItem[];
    isLoading? : boolean
}