import Yup, { string, object } from "yup";

const LoginFormSchema = object().shape({
  email: string()
    .email("invalid email")
    .required("An email is Required"),
  password: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("A password is Required")
});

export default LoginFormSchema;
