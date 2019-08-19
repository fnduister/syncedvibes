import { string, object } from "yup";

const EditFormSchema = object().shape({
  title: string()
    .min(2, "Too Short!")
    .max(150, "Too Long!")
    .required("A title is Required"),
  content: string()
    .min(2, "Too Short!")
    .required("A content is Required"),
    type: string().required("A Type is Required"),
          thumbnail: string().required("A Thumbnail is Required")  // url: string()
  //   .url("Invalid url")
  //   .required("An url is Required")
});

export default EditFormSchema;
