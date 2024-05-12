import { Visibility, VisibilityOff } from "@mui/icons-material"
import { Button, Checkbox, FormControlLabel, Grid, IconButton, InputAdornment, Link, TextField,Typography } from "@mui/material"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { signInValidationSchema } from "@validations"
import { useState } from "react"
import { SignIn } from "@auth-interface"
import { auth } from "@service"
import { Notification } from "../../utils/notification"
import { ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { setDataToCookie } from "@data-service"
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';





function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}




const Index = () => {

    const [showPassword,setShowPassword] = useState(false)
    // const [modal,setModal] = useState(false)

    const navigate = useNavigate()

    // const [email,setEmail] = useState("")

    const initialValues:SignIn = {
        email: "",
        password: "",
    }
    

    const handleSubmit = async(values:SignIn) =>{
        try {
            const response = await auth.sign_in(values)
            if (response.status === 200) {
                
                setDataToCookie("email",response.data.email)
                setDataToCookie("token",response.data.access_token)
                Notification({title:"Tizimga muvaffaqiyatli kirdingiz",type:"success"})
                setTimeout(()=>{navigate("/main")},1000)
            }
        } catch (error) {
            console.log(error)
            Notification({title:"Tizimga kirishda xatolik",type:"error"})
        }
    }

    return (
        <>
            <ToastContainer/>
            <div className="h-screen flex items-center justify-center flex-col gap-8 p-5">
                {/* <h1 className="text-[35px] font-bold sm:text-[40px] md:text-[50px]">Tizimga kirish</h1> */}
                    <Avatar sx={{bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h3" variant="h3">
                        Sign in
                    </Typography>
                <div className="max-w-[400px]">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={signInValidationSchema}
                        onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <Field
                                        name="email"
                                        type="email"
                                        as={TextField}
                                        label="Email"
                                        className="w-full"
                                        margin="normal"
                                        variant="outlined"
                                        helperText={
                                            <ErrorMessage
                                                name="email"
                                                component="p"
                                                className="text-red-500 text-[15px]"
                                            />
                                        }   
                                    />
                                    <Field
                                        name="password"
                                        type={showPassword ? 'text' : "password"}
                                        as={TextField}
                                        label="Parol"
                                        className="w-full"
                                        margin="normal"
                                        variant="outlined"
                                        helperText={
                                            <ErrorMessage 
                                                name="password"
                                                component="p"
                                                className="text-red-500 text-[15px]"
                                            />
                                        }
                                        InputProps={{
                                            endAdornment:(
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary" />}
                                            label="Remember me"
                                            
                                        />
                                        <Button
                                        type="submit" 
                                        variant="contained" 
                                        color="primary"
                                        disabled={isSubmitting}
                                        fullWidth
                                    >
                                        {isSubmitting ? "Submitting" : "Submit"}
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                        </Grid>
                                        <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                        </Grid>
                                    </Grid>
                                    <Copyright sx={{ mt: 5 }} />
                                </Form>
                            )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Index
