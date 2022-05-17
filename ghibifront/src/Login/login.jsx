import './login.css'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const Login = ()=>{
    const[user,setUser] = useState(null)
    const navigate = useNavigate()

    const URL = 'https://backend-studioghibli-app.herokuapp.com/users'

    useEffect(()=>{
        const getUserData = async()=>{
            const response = await fetch(URL)
            const data = await response.json()
            setUser(data)
            console.log(data)
        }
        getUserData()
    },[])

    return user?(
        <div className="loginpage">
            <h2>Login Form</h2>

            <form>
                <div class="imgcontainer">
                    <img src="https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png" alt="Avatar" class="avatar"/>
                </div>

                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                        
                    <button type="submit">Login</button>
                
                </div>

                <div class="container">
                    <button type="button" class="cancelbtn">Cancel</button>
                </div>
            </form>
        </div>
): <h1>Error on loggin</h1>
}

export default Login