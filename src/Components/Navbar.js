import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../Components/Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
        <Link to ="/" className='title'>Nutrimate</Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to ="/About">About</NavLink>
        </li>
        <li>
            <NavLink to ="/Contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar