import { IconButton, InputBase } from "@mui/material"
import { useEffect, useState } from "react"
import GlobalTableCategory from "../../components/ui/category_table"
import {category} from "@service"
import  Paper from "@mui/material/Paper"
import  SearchIcon from "@mui/icons-material/Search"
import {Category} from "@modals"
import CustomIcons from "../../components/ui/pagination"

const Index = () => {
    
    const [data,setData] = useState([])
    const [isLoading,setLoading] = useState(false)
    

    const getData = async () => {
        setLoading(true)
        try {
            const respons = await category.get_category({page:1, limit:10})
            console.log(respons);
            if(respons.status === 200){
                setData(respons.data.categories)
                setLoading(false)
            }

            
        }catch(err){
            console.log(err);
            
        }


    } 

    useEffect(()=>{
        getData()
    },[])
    
    const headers = [
        { title: "T/R", value:"index" },
        { title: "CategoryName", value:"category_name" },
        { title: "CategoryId", value:"category_id" },
        { title: "Action", value:"action" },
    ]

    
    
    return (
        <>
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
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                    </Paper>
                </div>
                <Category/>
            </div>
            <GlobalTableCategory headers={headers} body={data} isLoading={isLoading} />
            <CustomIcons/>
        </>
    )
}

export default Index
