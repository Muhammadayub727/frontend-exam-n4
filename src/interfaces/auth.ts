
export interface SignIn {
    email:string,
    password:string,
}

// export interface ForgotPassword{
//     email:string,
// }
// export interface UpdatePassword {
//     code:string,
//     new_password:string,
//     email?:string
// }

// export interface SignUp extends SignIn {
//     full_name:string,
//     phone_number:string
// }

// export interface AuthVerify {
//     code:string,
//     email:string
// }

export interface Request{
    sign_in:(data:SignIn)=>any,
}