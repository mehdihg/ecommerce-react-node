import { useFormik } from "formik";

import * as yup from "yup";
import { HiUserAdd } from "react-icons/hi";

import Form from "../Form/Form";
import "./Login.css";
import { Link } from "react-router-dom";
import { notify } from "../../utils/notify";

const Login = () => {
  const InputValues = [
    { type: "text", name: "email", placeholder: "Email", id: 1 },
    { type: "password", name: "password", placeholder: "Password", id: 2 },
  ];
  const initialValues = {
    email: "",
    password: "",
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
  });
  const onSubmit = () => {
    notify("Login successful");
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className="form-container login-container">
      <div className="login-form">
        <Form
          formik={formik}
          InputValues={InputValues}
          autocomplete="off"
          ButtnText="Login"
        >
          <Link to="/register">
            <HiUserAdd className="register-icon" />
          </Link>
        </Form>
      </div>
    </div>
  );
};
export default Login;
