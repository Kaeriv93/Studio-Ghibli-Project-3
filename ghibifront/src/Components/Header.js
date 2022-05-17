import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) =>{
    return(
        <nav>
            <Link to ='/'>
                Main
            </Link>
            <br/>
            <Link to ='/login'>
               Login
            </Link>
            <br/>
            <Link to ='/signup'>
                Signup
            </Link>
        </nav>
    )
}

export default Header