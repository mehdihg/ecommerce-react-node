import { useFormik } from "formik";

import * as yup from "yup";


import Form from "../Form/Form";
import "./Register.css";
import { Link } from "react-router-dom";
import { notify } from "../../utils/notify";
import MotioAnimate from "../MotionAnimate/MotionAnimte";

const Register = () => {
  const InputValues = [
    { type: "text", name: "email", placeholder: "Email", id: 1 },
    { type: "password", name: "password", placeholder: "Password", id: 2 },
    {
      type: "password",
      name: "passwordconfirm",
      placeholder: "Confirm password",
      id: 3,
    },
  ];
  const initialValues = {
    email: "",
    password: "",
    passwordconfirm: "",
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("email is required")
      .email("your email is not validate"),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        "Password has to contain uppercase and special character."
      ),
    passwordconfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const onSubmit = () => {
    notify("Register successful");
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <MotioAnimate>
    <div className="form-container register-container">
      <div className="register-form">
        <Form
          formik={formik}
          InputValues={InputValues}
          autocomplete="off"
          ButtnText="Register"
          title='Register'
        >

        </Form>
        <div className="account-login-register">
      <p>Do you have an account? </p>
      <Link to='/login'> Login</Link>
      </div>
      </div>
    </div>
    </MotioAnimate>
  );
};
export default Register;
