import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ErrorMessage, Field, Form, Formik} from "formik";
import { TextField } from '@mui/material';
import { validationSchemaProduct } from '@validations';
import { PostParamsProduct } from '../../../interfaces/product'
import { Notification } from '../../../utils/notification';
import { ToastContainer } from 'react-toastify';
import product from '../../../service/product';

    const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius:3,
    p: 4,
    };


    

export default function KeepMountedModal() {
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const initialValues : PostParamsProduct ={
        age_max:0,
        age_min:0,
        category_id:"",
        color:"",
        cost:0,
        count:0,
        description:"",
        discount:0,
        for_gender:"",
        made_in:"",
        product_name:"",
        size:0,
    }

    const handleSubmit = async (values: PostParamsProduct) => {
        try {
            console.log(values);    
            const res = await product.post_product(values);
            console.log(res)
            Notification({title:"Ma'lumot muvaffaqiyatli qo'shildi",type:"success"})
            handleClose(); 
            setTimeout(()=>{window.location.reload()},300)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <ToastContainer/>
        <Button type="submit" variant="contained" color="primary"  onClick={handleOpen}>
            Add Product
        </Button>
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <Typography 
                        id="keep-mounted-modal-title"
                        className="text-center"
                        variant="h5"
                        component="h5"
                    >
                        Product Create
                </Typography>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchemaProduct}
                        onSubmit={handleSubmit}
                    >
                        <Form className='float-left'>
                        <Field
                                name="age_max"
                                type="number"
                                as={TextField}
                                sx={{
                                    width:300,
                                    m:1,
                                }}
                                label="Age Max"
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="age_max"
                                        component="p"
                                        className="text-red-500 text-[15px]"
                                    />
                                }
                            />
                            <Field
                                name="age_min"
                                type="number"
                                as={TextField}
                                sx={{
                                    width:300,
                                    m:1,
                                }}
                                label="Age Min"
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="age_min"
                                        component="p"
                                        className="text-red-500 text-[15px]"
                                    />
                                }
                            />
                            <Field
                                name="category_id"
                                type="string"
                                as={TextField}
                                sx={{
                                    width:300,
                                    m:1,
                                }}
                                label="Category Id"
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="category_id"
                                        component="p"
                                        className="text-red-500 text-[15px]"
                                    />
                                }
                            />
                            <Field
                                name="color"
                                type="string"
                                as={TextField}
                                sx={{
                                    width:300,
                                    m:1,
                                }}
                                label="Color"
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="color"
                                        component="p"
                                        className="text-red-500 text-[15px]"
                                    />
                                }
                            />
                            <Field
                                name="cost"
                                type="number"
                                as={TextField}
                                sx={{
                                    width:300,
                                    m:1,
                                }}
                                label="Cost"
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="color"
                                        component="p"
                                        className="text-red-500 text-[15px]"
                                    />
                                }
                            />
                            <Field
                                name="count"
                                type="number"
                                as={TextField}
                                label="Count"
                                sx={{
                                    width:300,
                                    m:1,
                                }}
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="count"
                                        component="p"
                                        className="text-red-500 text-[15px]"
                                    />
                                }
                            />
                            <Field
                                name="description"
                                type="string"
                                as={TextField}
                                label="description"
                                sx={{
                                    width:300,
                                    m:1,
                                }}
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="description"
                                        component="p"
                                        className="text-red-500 text-[15px]"
                                    />
                                }
                            />
                            <Field
                                name="discount"
                                type="number"
                                as={TextField}
                                label="discount"
                                sx={{
                                    width:300,
                                    m:1,
                                }}
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="discount"
                                        component="p"
                                        className="text-red-500 text-[15px]"
                                    />
                                }
                            />
                            <Field
                                name="for_gender"
                                type="string"
                                as={TextField}
                                label="ForGender"
                                sx={{
                                    width:300,
                                    m:1,
                                }}
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="for_gender"
                                        component="p"
                                        className="text-red-500 text-[15px]"
                                    />
                                }
                            />
                            <Field
                                name="made_in"
                                type="string"
                                as={TextField}
                                label="Made In"
                                sx={{
                                    width:300,
                                    m:1,
                                }}
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="made_in"
                                        component="p"
                                        className="text-red-500 text-[15px]"
                                    />
                                }
                            />
                            <Field
                                name="product_name"
                                type="string"
                                as={TextField}
                                label="Product Name"
                                sx={{
                                    width:300,
                                    m:1,
                                }}
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="product_name"
                                        component="p"
                                        className="text-red-500 text-[15px]"
                                    />
                                }
                            />
                            <Field
                                name="size"
                                type="number"
                                as={TextField}
                                label="Size"
                                sx={{
                                    width:300,
                                    m:1,
                                }}
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="size"
                                        component="p"
                                        className="text-red-500 text-[15px]"
                                    />
                                }
                            />
                            <Button variant="contained" color="primary" type="submit" fullWidth >
                                Submit
                            </Button>
                        </Form>
                    </Formik>
            </Box>
        </Modal>
        </>
    );
}
