import './signup.css'

const Signup = () =>{
    return(
        <div className="signup">
            <form autocomplete="off">
                <div className="container">
                    <div className="sign">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account</p>
                    </div>
                    <hr/>
                    <label for="firstName"><b>First Name</b></label>
                    <input type="text" placeholder="Enter your first name" name="firstName" required />
                    <br/>
                    <label for ="lastName"><b>Last Name</b></label>
                    <input type="text" placeholder="Enter your last name" name="lastName" required/>
                    <br/>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />
                    <br/>
                    <label for ="psw"><b>Password</b></label>
                    <input type="text" placeholder="Enter Password" name="psw" required/>
                    <input type="submit" value="Sign Up"/>

                </div>
            </form>
            
        </div>
    )
}

export default Signup