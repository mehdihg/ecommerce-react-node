import { Link } from "react-router-dom";
import Button from "../Form/Button/Button";
import "./Checkout.css";
const Checkout = () => {
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
