import React from 'react'
// import {Routes,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Login from '../Login/login'

const Header = () =>{
    return(
        <nav>
            <Link to='/login'>
                <div>Login</div>
            </Link>
            <Link to='/signup'>
                <div>Sign Up</div>
            </Link>
        </nav>
    )
}

export default Header