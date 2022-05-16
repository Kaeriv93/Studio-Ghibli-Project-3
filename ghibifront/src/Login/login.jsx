import './login.css'

const Login = ()=>{
    return(
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
)
}

export default Login