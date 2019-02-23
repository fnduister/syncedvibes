import { string, object } from "yup";

const AddCommentFormSchema = object().shape({
  comment: string()
    .min(5, "Too Short!")
    .max(500, "Too Long!")
    .required("Comment can't be empty")
});

export default AddCommentFormSchema;
