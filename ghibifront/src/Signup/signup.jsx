import './signup.css'
import {useState,useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'

const Signup = () =>{
    const navigate = useNavigate
    const [user, setUser] = useState(null)
    const [newForm, setNewForm] = useState({
        firstName:'',
        lastName:'',
        username:'',
        email:'',
        password:''
    })

    const URL = 'https://backend-studioghibli-app.herokuapp.com/users'

    useEffect(()=>{
        const getUserData = async()=>{
            const response = await fetch(URL)
            const data = await response.json()
            setUser(data)
        }
        getUserData()
    },[])

    const handleChange = (e) =>{
        setNewForm({...newForm, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        createUser(newForm)
        setNewForm({
            firstName:'',
            lastName:'',
            username:'',
            email:'',
            passwords:''
        })
        navigate('/')
    }

    const createUser = async(user)=>{
        await fetch(URL,{
            method:'post',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(user)
        })
    }


    return user? (
        <div className="signup">
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="container">
                    <div className="sign">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account</p>
                    </div>
                    <hr/>
                    <label for="firstName"><b>First Name</b></label>
                    <input type="text" value={newForm.firstName} placeholder="Enter your first name" name="firstName" required onChange={handleChange} />
                    <br/>
                    <label for ="lastName"><b>Last Name</b></label>
                    <input type="text" value={newForm.lastName} placeholder="Enter your last name" name="lastName" required onChange={handleChange}/>
                    <br/>
                    <label for ="username"><b>Username</b></label>
                    <input type="text" value={newForm.username} placeholder="Enter your username" name="username" required onChange={handleChange}/>
                    <br/>
                    <label for="email"><b>Email</b></label>
                    <input type="text" value={newForm.email} placeholder="Enter Email" name="email" required onChange={handleChange}/>
                    <br/>
                    <label for ="password"><b>Password</b></label>
                    <input type="password" value={newForm.password} placeholder="Enter Password" name="password" required onChange={handleChange}/>
                    <input type="submit" value="Sign Up"/>

                </div>
            </form>
            
        </div>
    ): <h1>Error Cannot Access Signin Page</h1>
}

export default Signup