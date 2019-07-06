import { string, object } from "yup";

const EditFormSchema = object().shape({
  title: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("A title is Required"),
  content: string()
    .min(2, "Too Short!")
    .required("A content is Required"),
  // url: string()
  //   .url("Invalid url")
  //   .required("An url is Required")
});

export default EditFormSchema;
