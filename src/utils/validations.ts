import * as Yup from "yup";

export const signInValidationSchema = Yup.object().shape({
    email: Yup.string().email("Email invalit ").required("Email is required"),
    password: Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
        "Password must contain at least one uppercase, one lowercase letter, one number, one special character, and be between 8 to 20 characters long"
    ).required("Password is required")
});



///////////////////////////////WORKER/////////////////////////////
export const validationSchemaWorker = Yup.object().shape({
    email: Yup.string().email("Email invalit ").required("Email is required"),
    first_name: Yup.string().required('First name is required').matches(/^[A-Za-z]+$/, 'First name must contain only letters'),
    last_name: Yup.string().required('Last name is required').matches(/^[A-Za-z]+$/, 'Last name must contain only letters'),
    gender: Yup.string().required('Gender is required').oneOf(['Male', 'Female', 'Non-binary'], 'Invalid gender'),
    password: Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
        "Password must contain at least one uppercase, one lowercase letter, one number, one special character, and be between 8 to 20 characters long"
    ).required("Password is required"),

})


//////////////////////////////////Category///////////////////////////
export const validationSchemaCategory = Yup.object().shape({
    category_name: Yup.string().required("Category name required"),
})


////////////////////////////////PRODUCTS////////////////////////////
export const validationSchemaProduct = Yup.object().shape({
    age_max: Yup.string().required("Age Max required"),
    age_min: Yup.string().required("Age Min required"),
    category_id: Yup.string().required("Category id required"),
    color: Yup.string().required("Color required"),
    cost: Yup.string().required("Cost required"),
    count: Yup.string().required("Count required"),
    description: Yup.string().required("Description required"),
    discount: Yup.string().required("Discount required"),
    for_gender: Yup.string().required("ForGender required"),
    made_in: Yup.string().required("Made In required"),
    product_name: Yup.string().required("Category name required"),
    size: Yup.string().required("Size required"),
})

