import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import "./App.css";

import Layout from "./components/Layout/Layout";
import Loading from "./components/Loading/Loading";

import MainRoutes from "./routes/MainRoutes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  const dispatch = useDispatch()
  useEffect(()=>{
    let userData = JSON.parse(localStorage.getItem('auth')) || false
    if (userData){
      dispatch({type:'setAuth',payload:userData})
    }
  },[dispatch])

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="App">
        <ToastContainer        
        position="bottom-right"/>
          <Layout>
            <MainRoutes />
          </Layout>
        </div>
      )}
    </>
  );
}

export default App;
