import "./Navigation.css";
import { HiHome, HiUser, HiShoppingCart } from "react-icons/hi";
import { GiConverseShoe } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
const Navigation = () => {
  const state = useSelector((state) => state.reducerCart);

  return (
    <>
    <header className="header">
      <nav>
        <div className="nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeNav" : "")}
            exact="true"
          >
            <HiHome />
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "activeNav" : "")}
          >
            <GiConverseShoe />
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "activeNav cart-icon" : "cart-icon"
            }
          >
            <HiShoppingCart />
            {state.total > 0 && <span>{state.total}</span>}
          </NavLink>
        </div>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "activeNav" : "")}
        >
          <HiUser className="user_icon" />
        </NavLink>
      </nav>
    </header>
    <MobileNavigation/>
    </>
  );
};
export default Navigation;
