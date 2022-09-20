import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as data from "../../data";
import { AddToCart } from "../../provider/CartProvider/cartTypes";
import Button from "../Form/Button/Button";
import MotioAnimate from "../MotionAnimate/MotionAnimte";

import ProductSlider from "../ProductSlider/ProductSlider";
import "./ProductsList.css";
const ProductsList = () => {
  const dispatch = useDispatch();

  return (
    <ProductSlider>
      {data.products.map((item) => {
        return (
          <MotioAnimate key={item.id}>
            <div className="product-container">
              <div className="product">
                <h3 className="product-title">{item.name}</h3>
                <img src={item.image} alt={item.name} className="product-img" />
                <Link to={`/products/${item.id}`}>
                  <Button className="product-button">details</Button>
                </Link>
                <Button
                  className="product-button"
                  onClick={() => dispatch({ type: AddToCart, payload: item })}
                >
                  add to cart
                </Button>

                <div className="product-price">{item.price}$</div>
              </div>
            </div>
          </MotioAnimate>
        );
      })}
    </ProductSlider>
  );
};
export default ProductsList;
