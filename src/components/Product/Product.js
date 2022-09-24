import { useParams } from "react-router-dom";
import * as data from "../../data";
import Button from "../Form/Button/Button";

import {
  TbTruckDelivery,
  TbShoppingCartDiscount,
  TbCreditCard,
} from "react-icons/tb";
import "./Product.css";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../provider/CartProvider/cartTypes";
import { notify } from "../../utils/notify";
const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = data.products.find((item) => item.id === Number(id));
  const AddProduct=(item)=>{
    dispatch({ type: AddToCart, payload: item })
    notify(`${item.name} added to cart`,'success')
  }
  return (
    <div className="single-product-container">
      <div className="single-product">
        <div className="single-product-content">
          <img src={product.image} alt={product.name} />
          <Button
            className="single-product-button"
            onClick={() =>AddProduct(product)}
          >
            add to cart
          </Button>
        </div>
        <div className="single-product-details">
          <h3>
            {product.name} - {product.price} $
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="single-product-icon">
            <Button className="single-product-button">
              <TbTruckDelivery />
            </Button>
            <Button className="single-product-button single-product-button-middle">
              <TbShoppingCartDiscount />
            </Button>
            <Button className="single-product-button">
              <TbCreditCard />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
