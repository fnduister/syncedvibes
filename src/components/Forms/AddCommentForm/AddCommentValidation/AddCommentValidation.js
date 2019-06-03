import { string, object } from "yup";

const AddCommentFormSchema = object().shape({
  comment: string()
    .min(5, "Too Short!")
    .max(500, "Too Long!")
});
export default AddCommentFormSchema;