
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import Homepage from './components/Homepage/Homepage';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Product from './components/Product/Product';

import ProductsList from './components/ProductsList/ProductsList';
import Register from './components/Register/Register';


function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/products' element={<ProductsList/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/products/:id' element={<Product/>}/>
      </Routes>

      </Layout>

    </div>
  );
}

export default App;
