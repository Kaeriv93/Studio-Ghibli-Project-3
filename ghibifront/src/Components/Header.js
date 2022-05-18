import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) =>{
    return(
        <>
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
          <a href="https://github.com/Kaeriv93/Studio-Ghibli-Project-3" target='_blank'><img className="dustbabies" src="https://64.media.tumblr.com/tumblr_mac1iqN6oJ1rfjowdo1_500.gifv"/></a> 
        </nav>
        
        </>
    )
}

export default Header

/* kiki https://i.pinimg.com/originals/be/33/5f/be335fd0dc86f5fda4c98e057a5e322f.gif/ */