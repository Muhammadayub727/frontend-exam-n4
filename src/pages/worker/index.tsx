import { useEffect, useState } from "react"
import GlobalTable from "../../components/ui/table"
import {services} from "@service"
// import { getDataFromCookie } from "@data-service"
import  Paper from "@mui/material/Paper"
import {IconButton, InputBase } from "@mui/material"
import  SearchIcon from "@mui/icons-material/Search"
import {Worker} from "@modals"
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
                limit:20,
                name: change
        }
            const respons = await services.get_worker(params)
            console.log(respons);
            if(respons.status === 200){
                setData(respons.data.user)
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
        { title: "Ismi", value:"first_name" },
        { title: "Familyasi", value:"last_name" },
        { title: "gender", value:"gender" },
        { title: "Email", value:"email" },
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
                <Worker/>
            </div>
            <GlobalTable headers={headers} body={data} isLoading={isLoading}/>
            <CustomIcons/>
        </div>
    )
}

export default Index

