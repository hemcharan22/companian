import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import { useAuth } from "../pages/api/auth";
import { setErrorMessage } from "../pages/api/setErrorMessage";

import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

const Login = () => {
  const router = useRouter();
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (event, email, password) => {
    event.preventDefault(); // prevents default behaviour of html form for more explainion visit https://stackoverflow.com/questions/62468443/firebase-auth-network-error-from-event-preventdefault-and-event-stoppropagatio#:~:text=preventDefault()%20you%20indicate%20that,to%20act%20on%20the%20event.

    auth
      .signUp(email, password)
      .then(() => {
        // do something after signing in. For example, router.push("/");
        router.push("/");
      })
      .catch((error) => {
        let { title, description } = setErrorMessage(error);
        // do something with error title and description here
        alert(title + ": " + description);
      });
  };

 

  // if a user is logged in, redirect to a page of your liking
  if (auth.user) {
    router.push("/");
    return null;
  }

  // if there is no signed in user
  if (!auth.user) {
    return (
      <div className={styles.container}>
          <h1>Signup</h1>
          <br/>

          <form  onSubmit={(event) => signUp(event, email, password)}> 
          
            <label><h2>Email Address</h2></label>
            <TextField sx={{ width: 300 }} id="outlined-basic" label="Enter your email" variant="outlined" 
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}/>

            <br/>

            <label><h2>Password</h2></label>
            <TextField sx={{ width: 300 }} id="outlined-basic" label="Enter your password" variant="outlined" 
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}/>

            <br/><br/><br/>

            <Button type="submit" variant="contained" className={styles.margin}>Signup</Button>
          
          </form>
           
          <br/><br/>
          <br/><br/>

          <Link href="/">&larr; Go back</Link> 
          {/* &larr is the html charector for left arrow
              https://www.w3schools.com/charsets/ref_utf_arrows.asp */}
        
      </div>
    );
  }
};

export default Login;



