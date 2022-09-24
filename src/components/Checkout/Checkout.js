import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ClearCart } from "../../provider/CartProvider/cartTypes";

import Button from "../Form/Button/Button";
import "./Checkout.css";
const Checkout = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({type:ClearCart})
  },[dispatch])

  return (
    <div className="checkout-msg">
      <h2>Thank you for shopping with us</h2>
      <Link to="/products">
        <Button className="checkout-back-button">Shop more</Button>
      </Link>
    </div>
  );
};
export default Checkout;
