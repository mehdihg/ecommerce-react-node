import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import ProductsList from "../components/ProductsList/ProductsList";
import ContactUs from "../components/ContactUs/ContactUs";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Product from "../components/Product/Product";
import { AnimatePresence } from "framer-motion";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import Profile from "../components/Profile/Profile";
const MainRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} exact={true} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </AnimatePresence>
  );
};
export default MainRoutes;
