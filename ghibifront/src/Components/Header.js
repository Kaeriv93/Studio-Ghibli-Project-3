import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";
import {Link} from 'react-router-dom'
import Login from '../Login/login'

const Header = () =>{
    return(
        <nav>
            <Link to ='login'>
                Login
            </Link>
        </nav>
    )
}

export default Header