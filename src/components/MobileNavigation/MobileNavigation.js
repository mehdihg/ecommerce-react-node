import { useState } from "react";
import {  HiOutlineMenuAlt2 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import "./MobileNaviation.css";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
const[burgerClass,setBurgerClass]=useState("mobile-burger closed")
const [mobileList,setMobileList]=useState("mobile-list closed")
const [isClicked,setIsClicked]=useState(false)
const updateClick=()=>{
  if (!isClicked){
    setBurgerClass('mobile-burger open')
    setMobileList('mobile-list open')
  }else{
    setBurgerClass('mobile-burger closed')
    setMobileList('mobile-list closed')
  }
  setIsClicked(!isClicked)
}
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
    <div className={mobileList}  onClick={updateClick}>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/products'>Products</NavLink>
      </li>
      <li>
        <NavLink to='/cart'>Cart</NavLink>
      </li>
      <li>
        <NavLink to='/contact-us'>Contact us</NavLink>
      </li>
    </div>
</>
   /* <>
      <header className="mobile-header">
        <nav className="mobile-nav">
          {mobileNav ? (
            <GrClose
              onClick={() => setMobileNav(false)}
              className="close-icon-mobile"
            />
          ) : (
            <HiOutlineMenuAlt2
              onClick={() => setMobileNav(true)}
              className="menu-icon-mobile"
            />
          )}
        </nav>
      </header>
      {mobileNav ? (
        <div className="mobile-black-layout ">
          <div className="mobile-menu">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activeNav" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "activeNav" : "")}
            >
              Products
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "activeNav" : "")}
            >
              Cart
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "activeNav" : "")}
            >
              Login
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="mobile-black-layout-closed"></div>
      )}
    </>*/
  );
};
export default MobileNavigation;
