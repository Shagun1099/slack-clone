import React from 'react';
import './Login.css';
import {Button} from "@material-ui/core";
import {auth,provider} from "./firebase";
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';

function Login() {
	
 const [state,dispatch]=useStateValue();
	
 const signIn = () =>{
	auth.signInWithPopup(provider)
	    .then((result)=>{
		dispatch({
		type:actionTypes.SET_USER,
		user:result.user,
		})
	    })
	    .catch((error)=>{
		alert(error.message);
	    });
 }
	
  return (
    <div className="login">
		<div className="login_container">
		<img src="https://i.redd.it/gdphfkmbxua21.png " alt="slack logo"/>
		<h2>Sign in to the Slack App</h2>
		<p>www.slack.com</p>
		<Button onClick={signIn}>Sign in with Google</Button>
		</div>
	
    </div>
  );
}

export default Login;
