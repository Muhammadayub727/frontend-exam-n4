import { useEffect, useState } from "react"
import GlobalTable from "../../components/ui/table"
import {services} from "@service"
// import { getDataFromCookie } from "@data-service"
import  Paper from "@mui/material/Paper"
import { Button, IconButton, InputBase } from "@mui/material"
import  SearchIcon from "@mui/icons-material/Search"


const Index = () => {
    const [data,setData] = useState([])
    const [isLoading,setLoading] = useState(false)
    const [params] = useState({
        email:"string",
        first_name:"string",
        last_name:"string",
        gender:"string",
        password:"string",
    })

    const getData = async  () => {
        setLoading(true)
        try {
            const response = await services.post_workers(params)
            console.log(response)
            response?.data?.services.forEach((item:any,index:number)=>{
                item.index = index + 1
            })
            setData(response?.data?.services)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }


    } 

    useEffect(()=>{
        getData()
    },[params])
    
    const headers = [
        { title: "T/R", value:"index" },
        { title: "Ismi", value:"name" },
        { title: "Familyasi", value:"lastName" },
        { title: "gender", value:"gender" },
        { title: "Email", value:"email" },
        { title: "", value:"action" },
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
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                    </Paper>
                </div>
                    <Button variant="contained" color="primary" >Add Products</Button>
            </div>
            <GlobalTable headers={headers} body={data} isLoading={isLoading}/>
        </div>
    )
}

export default Index

