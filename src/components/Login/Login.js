import { useFormik } from "formik";

import * as yup from "yup";


import Form from "../Form/Form";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { notify } from "../../utils/notify";
import MotioAnimate from "../MotionAnimate/MotionAnimte";
import loginuser from "../../services/login";
import { useDispatch, useSelector } from "react-redux";
import useQuery from "../../hooks/useQuery";
import { useEffect } from "react";


const Login = () => {

  const navigate=useNavigate()
  const query = useQuery()
  const redirect =query.get('redirect') || 'products'
  const dispatch=useDispatch()
  const authState = useSelector(state=>state.AuthProvider.userData)
  const InputValues = [
    { type: "text", name: "email", placeholder: "Email", id: 1 },
    { type: "password", name: "password", placeholder: "Password", id: 2 },
  ];
  useEffect(()=>{
    if (authState){
      navigate(`/checkout`)
    }
  },[redirect])
  const onSubmit = async(values) => {

    try{

      const {data}=await loginuser(values)
      notify("Login successful",'success');
      dispatch({type:'setAuth',payload:data})
      localStorage.setItem('auth',JSON.stringify(data))
 
      navigate(`/${redirect}`)
    }catch(error){
      notify(error.response.data.message,'error');

    }
  };
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
      .required("password is required")
  
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <MotioAnimate>
      <div className="form-container login-container">
        <div className="login-form">
          <Form
            formik={formik}
            InputValues={InputValues}
            autocomplete="off"
            ButtnText="Login"
            title="Login"
          ></Form>
          <div className="account-login-register">
            <p>Don't have an account? </p>
            <Link to={`/register?redirect=${redirect}`}> Sign Up</Link>
          </div>
        </div>
      </div>
    </MotioAnimate>
  );
};
export default Login;
