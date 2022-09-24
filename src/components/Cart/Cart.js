import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AddToCart,
  RemoveFromCart,
} from "../../provider/CartProvider/cartTypes";
import Button from "../Form/Button/Button";
import "./Cart.css";
const Cart = () => {
  const state = useSelector((state) => state.reducerCart);
  const dispatch = useDispatch();
  return (
    <>
      {state.cart.length === 0 ? (
        <div className="shopping-cart-msg">
          <h2>Cart Is Empty!</h2>
          <Link to="/products">
            <Button className="shopping-cart-back-button">Shop Now</Button>
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="desc">
            <div className="desc-product">
              <span className="desc-product-products">products</span>
              <span className="desc-product-description">description</span>

              <span className="desc-product-quantity">quantity</span>
              <span className="desc-product-price">price</span>
            </div>
            <div className="desc-checkout">
              <h2>Summary</h2>
            </div>
          </div>

          <div className="cart">
            <div className="cart-product-container">
              {state.cart.map((item) => {
                return (
                  <div key={item.id} className="cart-product">
                    <img src={item.image} alt={item.name} />
                    <div className="cart-name-product">
                      <span>{item.name}</span>
                    </div>
                    <div className="cart-product-buttons">
                      <button
                        onClick={() =>
                          dispatch({ type: RemoveFromCart, payload: item })
                        }
                      >
                        -
                      </button>
                      <span className="cart-product-qunatity">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch({ type: AddToCart, payload: item })
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className="cart-product-price">
                      <span>{item.price}$</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="checkout-details">
              <h4>Price:{state.totalPrice}$</h4>
              <h4 className="shipping-cart">Shipping:20$</h4>
              <h4>TotalPrice:{state.totalPrice + 20}$</h4>
              <Link to="/register?redirect=checkout">
                <Button>Checkout</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
