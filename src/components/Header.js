import React,{useState} from "react";
import { FiCode,FiMenu,FiX } from "react-icons/fi";
import './Header.css'
import logo from '../logo/logo.png'

 function Header(){
     const [click,setClick] = useState(false);
     const handleClick = () => setClick(!click);
     const closeMobileMenu = () => setClick(false);
     return(
         <div className="header">
             <div className="container">
                 <div className="header-con">
                    <nav>
                     <ul className={click?"menu active":"menu"}>
                         <li className="menu-link" onClick={closeMobileMenu}>
                             <a href="#">Home</a>
                         </li>
                         <li className="menu-link" onClick={closeMobileMenu}>
                             <a href="#bg">Story</a>
                         </li>
                         <li>
                          <a href="#"><div className="logo">
                              <img src={logo} alt="logo" /*width="50vmax" height="50vmax"*/></img></div></a>
                         
                        
                        </li>
                         <li className="menu-link" onClick={closeMobileMenu}>
                             <a href="#content7-bg">Moral</a>
                         </li>
                         <li className="menu-link" onClick={closeMobileMenu}>
                             <a href="#about-id">About us</a>
                         </li>
                    </ul> 
                    </nav>
                    <div className="mobile-menu" onClick={handleClick}>
                    {click ?(<FiX/>):(<FiMenu/>)}
                    </div>
                 </div>
             </div>
             
         </div>
     )
 }

 export default Header