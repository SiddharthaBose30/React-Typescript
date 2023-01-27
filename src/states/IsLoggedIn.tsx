import React from "react";
import { useState } from "react";
export const IsLoggedIn =()=>{
    const [loggedIn,setLoggedIn]=useState(false);
    const logIn=()=>{
        setLoggedIn(true);
    }
    const logOut =()=>{
        setLoggedIn(false);
    }
    return <div>
        <button onClick={logIn}>Log In</button>
        <button onClick={logOut}>Log Out</button>
        User Is {loggedIn?'LoggedIn':'LoggedOut'}</div>
}