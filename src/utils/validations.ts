import * as Yup from "yup";


export const signInValidationSchema = Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,("Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter")).required("Password is required"),
});

