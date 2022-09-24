import { useFormik } from "formik";

import * as yup from "yup";

import Form from "../Form/Form";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { notify } from "../../utils/notify";
import MotioAnimate from "../MotionAnimate/MotionAnimte";
import signup from "../../services/signup";
import { useDispatch, useSelector } from "react-redux";
import useQuery from "../../hooks/useQuery";
import { useEffect } from "react";


const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authState = useSelector(state=>state.AuthProvider.userData)
  const query=useQuery()
  const redirect =query.get('redirect') || 'products'
  useEffect(()=>{
    if (authState){
      navigate(`/checkout`)
    }
  },[redirect])
  const InputValues = [
    { type: "text", name: "name", placeholder: "Name", id: 1 },
    { type: "text", name: "email", placeholder: "Email", id: 2 },
    { type: "tel", name: "phoneNumber", placeholder: "Phone", id: 3 },
    { type: "password", name: "password", placeholder: "Password", id: 4 },
    {
      type: "password",
      name: "passwordconfirm",
      placeholder: "Confirm password",
      id: 5,
    },
  ];
  const initialValues = {
    name:'',
    email: "",
    phoneNumber: "",
    password: "",
    passwordconfirm: "",
  };
  const validationSchema = yup.object({
    name: yup
    .string()
    .required("name is required"),
    email: yup
      .string()
      .required("email is required")
      .email("your email is not validate"),
      phoneNumber: yup
      .string()
      .required("phone number is required"),

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
  const onSubmit = async(values) => {
    const {name,email,password,phoneNumber}=values
    const userData={
      name,
      email,
      password,
      phoneNumber

    }

    try{
     const {data}= await signup(userData);
      notify("Register successful",'success');
      dispatch({type:'setAuth',data})
      localStorage.setItem('auth',JSON.stringify(data))
      navigate(`/${redirect}`)
    }catch(error){
      if(error.response&&error.response.data.message){
        notify(error.response.data.message,'error');
      }
    }

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
            title="Register"
          ></Form>
          <div className="account-login-register">
            <p>Do you have an account? </p>
            <Link to={`/login?redirect=${redirect}`}>Login</Link>
          </div>
        </div>
      </div>
    </MotioAnimate>
  );
};
export default Register;
