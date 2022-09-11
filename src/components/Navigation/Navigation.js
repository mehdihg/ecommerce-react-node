
import './Navigation.css'
import { HiHome  ,HiUser,HiShoppingCart } from "react-icons/hi";
import { GiConverseShoe} from "react-icons/gi"
import { NavLink } from "react-router-dom";
const Navigation=()=>{
return(
    <header className="header">

    <nav>
        <div className="nav">
            <NavLink to='/'className={({ isActive }) =>
              isActive ? 'activeNav' : ''
            }>
            

            <HiHome/>
           
            </NavLink>

            <NavLink to='/products'className={({ isActive }) =>
              isActive ? 'activeNav' : ''
            }>
            <GiConverseShoe/>
            
            </NavLink>

            <NavLink to='/login'className={({ isActive }) =>
              isActive ? 'activeNav' : ''
            }>
            <HiShoppingCart/>
            </NavLink>
            </div>
            <NavLink to='/login'className={({ isActive }) =>
              isActive ? 'activeNav' : ''
            }>
        <HiUser  className="user_icon"/>
        </NavLink>

        </nav>
    </header>
)
}
export default Navigation