import { useEffect, useState } from "react";

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

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="App">
          <Layout>
            <MainRoutes />
          </Layout>
        </div>
      )}
    </>
  );
}

export default App;
