import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ErrorMessage, Field, Form, Formik} from "formik";
import { TextField } from '@mui/material';
import { validationSchemaCategory } from '@validations';
import edit from "../../../assets/images/edit.svg"
import { PostParamsCategory } from '../../../interfaces/category';
import category from '../../../service/category'


    const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius:3,
    p: 4,
    };


    

export default function KeepMountedModal({props}:any) {
    console.log(props);
    
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const initialValues : PostParamsCategory ={
        category_name:   "",
        category_id:   ""
    }
    const handleSubmit = async (values : PostParamsCategory) => {
        const params = {...values , category_id:props?.category_id }
        try {
            // console.log(values);
            const res = await category.update_category(params);
            console.log(res)
            handleClose(); 
            setTimeout(()=>{window.location.reload()},300)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <img src={edit} 
            alt="Edit" 
            onClick={handleOpen} />
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
                        Update Category
                </Typography>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchemaCategory}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <Field
                                name="category_name"
                                type="text"
                                as={TextField}
                                fullWidth
                                label={props?.category_name}
                                placeholder={props?.category_name}
                                margin="normal"
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name="category_name"
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
        </div>
    );
}

