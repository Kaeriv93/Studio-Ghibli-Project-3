import './login.css'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const Login = ()=>{
    const[user,setUser] = useState(null)
    const navigate = useNavigate()
    const [newForm, setNewForm] = useState({
        email:'',
        password:''
    })

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

    const handleChange = (e) =>{
        setNewForm({...newForm, [e.target.name]:e.target.value})
        console.log(e.target.value)
    }

    const handleSubmit = async event =>{
        event.preventDefault()
   
    }




    return user?(
        <div className="loginpage">
            <h2>Login Form</h2>

            <form onSubmit={handleSubmit}>
                <div class="imgcontainer">
                    <img src="https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png" alt="Avatar" class="avatar"/>
                </div>

                <div class="container">
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required onChange={handleChange}/>

                    <label for="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange}/>
                        
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