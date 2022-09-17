import Form from "../Form/Form";
import * as yup from "yup";

import { useFormik } from "formik";
import TextArea from "../Form/Textarea/TextArea";

import "./Contact.css";
import { notify } from "../../utils/notify";
import MotioAnimate from "../MotionAnimate/MotionAnimte";


const ContactUs = () => {
  let initialValues = {
    name: "",
    email: "",
    message: "",
    subject: "",
  };
  const InputValues = [
    { type: "text", name: "name", placeholder: "Name", id: 1 },
    { type: "text", name: "email", placeholder: "Email", id: 2 },
    { type: "text", name: "subject", placeholder: "Subject", id: 3 },
  ];

  const validationSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup
      .string()
      .required("email is required")
      .email("your email is not validate"),
    subject: yup.string().required("subject is required"),
  });
  const onSubmit = (values, { resetForm }) => {
    notify("Thanks for getting in touch");
    resetForm({ values: "" });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <MotioAnimate>
    <div className="form-container contact-container">
      <Form formik={formik} InputValues={InputValues} ButtnText="Send">
        <TextArea formik={formik} />
      </Form>
    </div>
    </MotioAnimate>
  );
};
export default ContactUs;
