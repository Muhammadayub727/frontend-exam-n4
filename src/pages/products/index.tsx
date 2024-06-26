import { useEffect, useState } from "react"
import GlobalTableProduct from "../../components/ui/product_table"
import {product} from "@service"
// import { getDataFromCookie } from "@data-service"
import  Paper from "@mui/material/Paper"
import {IconButton, InputBase } from "@mui/material"
import  SearchIcon from "@mui/icons-material/Search"
import {Product} from "@modals"
import CustomIcons from "../../components/ui/pagination"

const Index = () => {
    const [data,setData] = useState([])
    const [isLoading,setLoading] = useState(false)
    const [change , setChange] = useState("")

    const getData = async () => {
        setLoading(true)
        try {
            const params ={
                    page:1,
                    limit:10,
                    name: change
            }
            const respons = await product.get_product(params)
            console.log(respons);
            if(respons.status === 200){
                setData(respons?.data?.products)
                setLoading(false)
            }

            
        }catch(err){
            console.log(err);
            
        }


    } 

    useEffect(()=>{
        getData()
    },[change])
    
    const headers = [
        { title: "T/R", value:"index" },
        { title: "Product Name", value:"product_name" },
        { title: "Color", value:"color" },
        { title: "Size", value:"size" },
        { title: "Count", value:"count" },
        { title: "Cost", value:"cost" },
        { title: "Action", value:"action" },
    ]


    return (
        <div>
            <div className="py-3 flex justify-between items-center">
                <div className="w-96">
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Products"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            onChange={(e)=>setChange(e.target.value)}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                    </Paper>
                </div>
                <Product/>
            </div>
            <GlobalTableProduct headers={headers} body={data} isLoading={isLoading}/>
            <CustomIcons/>

        </div>
    )
}

export default Index


