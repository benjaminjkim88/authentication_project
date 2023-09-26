import '../App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

function SignIn() {
    const [loginInfo, setLoginInfo] = useState({
        'email': "",
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
        const {email, password} = loginInfo;
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((useCredential) => {
            console.log(useCredential)
        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <div className="login-container">
     <form className="login" onSubmit={handleSubmit}>

        <input 
            name="email" 
            value={loginInfo.email}
            type="text" 
            placeholder="Email"
            onChange={handleChange}>
        </input>

        <input 
            name="password"
            value={loginInfo.password}
            type="password" 
            placeholder="Password" 
            onChange={handleChange}>
        </input>

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
