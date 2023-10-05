import '../App.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import validator from 'validator';

function CreateAccount() {
    const navigate = useNavigate();

    const [isValid, setIsValid] = useState(true);
    const [isMatching, setIsMatching] = useState(true);
    const [isLength, setIsLength] = useState(true);
    const [isExisting, setIsExisting] = useState(false);

    const [accountInfo, setAccountInfo] = useState({
        'email': "",
        'password': "",
        'confirm': ""
    });

    const handleChange = (event) => {
        const { email } = accountInfo;

        setAccountInfo(prev => ({
            ...prev,
            [event.target.name]: event.target.value

        }))
        
        if (validator.isEmail(email)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
     
    }
    console.log(accountInfo)

    const handleSubmit = (event) => {

        const {email, password, confirm} = accountInfo;
        event.preventDefault();
        if (password === confirm) {
            setIsMatching(true);
        } else {
            setIsMatching(false);
        }

        if (password.length === 0) {
            setIsLength(true);
        } else if (password.length < 6) {
            setIsLength(false);
        } else {
            setIsLength(true);
        }

        if (isMatching && isValid && isLength){
            createUserWithEmailAndPassword(auth, email, password)
            .then((useCredential) => {
                console.log(useCredential)
                navigate("/");
            }).catch((error) => {
                setIsExisting(true);
                console.log(error)
            })
        }
    }

  return (
    <div className="login-container">
     <form className="login" onSubmit={handleSubmit}>

        <input name="email" type="text" placeholder="Email" onChange={handleChange}></input>
        {isValid? null:<p className="password-match">Please use a valid email.</p>}
        <input name="password" type="password" placeholder="Password" onChange={handleChange}></input>

        <input name="confirm" type="password" placeholder="Confirm Password" onChange={handleChange}></input>
        {isLength? null:<p className="password-match">Password longer than 6 characters.</p>}
        {isMatching? null:<p className="password-match">Make sure passwords are matching.</p>}
        {isExisting? <p className="password-match">This email address is already registered.</p>:null}


        <div className="buttons">
            <button name="Register" type="submit">Resigter</button>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
     </form>
    </div>
  );
}

export default CreateAccount;
