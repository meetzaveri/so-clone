import * as Yup from "yup";

export const WritePostSchema = Yup.object().shape({
  title: Yup.string().required(),
  body: Yup.string().required("Please describe the question"),
  tags: Yup.string().required("tags is required")
  // phone: Yup.string().min(10, "Enter valid phone number")
});
