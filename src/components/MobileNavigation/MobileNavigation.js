import { useState } from "react";

import "./MobileNaviation.css";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
  const [burgerClass, setBurgerClass] = useState("mobile-burger closed");
  const [mobileList, setMobileList] = useState("mobile-list closed");
  const [isClicked, setIsClicked] = useState(false);

  const updateClick = () => {
    if (!isClicked) {
      setBurgerClass("mobile-burger open");
      setMobileList("mobile-list open");
    } else {
      setBurgerClass("mobile-burger closed");
      setMobileList("mobile-list closed");
    }
    setIsClicked(!isClicked);
  };
  return (
    <>
      <header className="mobile-header">
        <nav className="mobile-nav">
          <div className={burgerClass} onClick={updateClick}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </header>
      <div className={mobileList} onClick={updateClick}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">Contact us</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default MobileNavigation;
