import  Box  from "@mui/material/Box"
import  Table  from "@mui/material/Table"
import  TableCell  from "@mui/material/TableCell"
import  TableContainer  from "@mui/material/TableContainer"
import  TableHead from "@mui/material/TableHead"
import  TableBody from "@mui/material/TableBody"
import  TableRow  from "@mui/material/TableRow"
import  TableSortLabel  from "@mui/material/TableSortLabel"
import  Paper from "@mui/material/Paper"
import { TableProps } from "@global-interface"
import  { Skeleton } from "@mui/material"
import del from "../../assets/images/delete.svg"
import { Notification } from "../../utils/notification"
import { ToastContainer } from "react-toastify"
import { CategoryEdit } from "@modals"
import { category } from "@service"





const GlobalTableCategory = ({headers, body,isLoading} : TableProps) => {


    const deleteItem = (id:string) => {
        try {
            console.log(id)
            Notification({title:"Ma'lumot muvaffaqiyatli o'chdi",type:"success"})
            category.del_category(id)
            
            
        } catch (error) {
            console.log(error)
        }
        setTimeout(()=>{window.location.reload()},300)
    }


    return (
        <>
        <ToastContainer/>
            <Box sx={{width: "100%"}}>
            <Paper sx={{width: "100%", mb: 2}}>
                <TableContainer>
                    <Table
                        sx={{minWidth: 750}}
                        size="medium"
                        aria-labelledby="tableTitle"
                    >
                        <TableHead>
                            <TableRow>  
                                {headers?.map((header,index) => (
                                    <TableCell key={index}>
                                        <TableSortLabel>{header.title}</TableSortLabel>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { isLoading ? 
                                Array.from(new Array(5)).map((_,index)=>(
                                    <TableRow key={index}>
                                        {headers?.map((_,i)=>(
                                            <TableCell key={i}>
                                                <Skeleton/>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                                :
                                body?.map((item,index)=>(
                                    <TableRow key={index}>
                                        {headers?.map((header,i)=>(
                                            <TableCell
                                                key={i}
                                                className={item[header.value]?.class}
                                            >
                                                {header.value === "action" ? (
                                                    <div className="flex gap-3 cursor-pointer items-center">
                                                        <img 
                                                            src={del} 
                                                            alt="Delete" 
                                                            onClick={()=> deleteItem(item?.category_id)} 
                                                        />
                                                        <CategoryEdit/>
                                                    </div>
                                                ): header.value === "index" ? index + 1 : (
                                                    item[header.value]
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>

        </>
    )
}

export default GlobalTableCategory
