import {IoShareSocialSharp} from 'react-icons/io5'
import{FaTelegramPlane} from 'react-icons/fa'
import{HiPhone} from 'react-icons/hi'
import './SocialMedia.css'
import { Link } from 'react-router-dom'
const SocialMedia=({collection,setCollection})=>{
    return(
      
        <div className="social-media">

      <Link to='/contact-us' >
        <HiPhone className={collection?"social-media-linkedin-open":"social-media-linkedin"}/>
        </Link>
        <FaTelegramPlane  className={collection?"social-media-telegram-open":"social-media-telegram"}/>
        <IoShareSocialSharp onClick={()=>setCollection(prevState=>!prevState)}  className={collection?"social-media-icon-open":"social-media-icon"}/>
      </div>

    )
}
export default SocialMedia