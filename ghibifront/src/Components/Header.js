import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) =>{
    return(
        <nav className="navbar">
            <Link to ='/'>
                Main
            </Link>
            <Link to ='/login'>
               Login
            </Link>
            <Link to ='/signup'>
                Signup
            </Link>
        </nav>
    )
}

export default Header