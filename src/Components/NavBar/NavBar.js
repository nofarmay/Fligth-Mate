import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
// import logo from '../../public/img/logo.jpg'
function NavBar({loggedUser,setloggedUser}) {
   return (
      <>
        
    <nav className="menu-container">
   {/* burger menu  */}
  <input type="checkbox" aria-label="Toggle menu" />
  <span></span>
  <span></span>
  <span></span>

 
   {/* menu items  */}
  <div className="menu">
<ul>  
{!loggedUser ? 
<Link to="/Login"><li>Log in</li></Link>:
<>
<Link to="/about" className="menu-logo">
   LOGO 
   {/* <img src={process.env.PUBLIC_URL + "/logo.jpg"} 
   alt="My Awesome Website"/> */}
   </Link>
{/* <Link to="/about"><li>About</li></Link> */}
<Link to="/findflight"><li>Find Flight</li></Link> 
{/* <Link to="/Register"><li>Register</li></Link> */}
<Link to="/profile"><li>Profile</li></Link>
{/* <Link to="/Feed"><li>Feed</li></Link> */}
<Link to="/findMate"><li>Find mates</li></Link>
<Link to="/Messages"><li>Messages</li></Link>
<Link to="/Fligths"><li>Fligths</li></Link>
<Link to="/Admin"><li>Admin</li></Link>
{/* <Link to="/passengers"><li>AddProfile</li></Link> */}

{/* TODO SPACE BETWEEN THE REGISTER ETC */}
{/* <Link to="/Admin"><li>Admin</li></Link> */}
</>}
</ul>
   </div>
</nav>
  
 </>) 
   }
   export default NavBar;




   