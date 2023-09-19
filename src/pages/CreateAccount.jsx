import '../App.css';
import { useState } from 'react';

function CreateAccount() {

    const [isMatching, setIsMatching] = useState(true);

    const [accountInfo, setAccountInfo] = useState({
        'username': "",
        'password': "",
        'confirm': ""
    });

    const handleChange = (event) => {

        setAccountInfo(prev => ({
            ...prev,
            [event.target.name]: event.target.value

        }))
     
    }
    console.log(accountInfo)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (accountInfo.password === accountInfo.confirm) {
            setIsMatching(true);
        } else {
            setIsMatching(false);
        }
    }

  return (
    <div className="login-container">
     <form className="login" onSubmit={handleSubmit}>

        <input name="username" type="text" placeholder="Username" onChange={handleChange}></input>

        <input name="password" type="password" placeholder="Password" onChange={handleChange}></input>

        <input name="confirm" type="password" placeholder="Confirm Password" onChange={handleChange}></input>
        {isMatching? null:<p className="password-match">Make sure passwords are matching.</p>}
        <div className="buttons">
            <button name="loginButton" type="submit">Submit</button>
        </div>
     </form>
    </div>
  );
}

export default CreateAccount;
