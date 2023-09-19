import '../App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
    const [loginInfo, setLoginInfo] = useState({
        'username': "",
        'password': ""
    })

    const handleChange = (event) => {

        setLoginInfo(prev => ({
            ...prev,
            [event.target.name]: event.target.value

        }))
     
    }
    console.log(loginInfo)

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <div className="login-container">
     <form className="login" onSubmit={handleSubmit}>

        <input name="username" type="text" placeholder="Username" onChange={handleChange}></input>

        <input name="password" type="password" placeholder="Password" onChange={handleChange}></input>

        <div className="buttons">
            <button name="loginButton" type="submit">Log In</button>
            <Link to="/create-account">
                <button>Sign Up</button>
            </Link>
        </div>
     </form>
    </div>
  );
}

export default SignIn;
