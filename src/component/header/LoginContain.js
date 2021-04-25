import React from 'react'
import {useHistory} from 'react-router-dom';

const LoginContain =({setLogin}) => {
    const history = useHistory()
    const handlClick =() =>{
        history.push("/register");
    }
    return (
        <div className="loginContain" onClick={() =>setLogin(false)}>
            <button onClick={handlClick} className="loginContain-para" >Login or Sign Up </button>
        </div>
    )
}

export default LoginContain
