import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import { useAuth } from "../pages/api/auth";
import { setErrorMessage } from "../pages/api/setErrorMessage";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = () => {
  const router = useRouter(); //using router from react
  const auth = useAuth(); //using auth function from firebase

  const [email, setEmail] = useState("");//decalaring email
  const [password, setPassword] = useState("");//declaring password

  const signIn = (event, email, password) => { 
    event.preventDefault();

    auth
      .signIn(email, password)
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

  // // loading state
  // if (auth.loading) {
  //   return <p>Loading...</p>;
  // }

  // if a user is logged in, redirect to a page of your liking
  if (auth.user) {
    router.push("/");
    return null;
  }

  // if there is no signed in user
  if (!auth.user) {
    return (
      <div className={styles.container}>
        
          <h1>Login</h1>
          
          <br/>

          <form onSubmit={(event) => signIn(event, email, password)}>
            
            <label>
              <h2>Email Address</h2>
            </label>
            <TextField sx={{ width: 300 }}
                        fullWidth id="outlined-basic" 
                        label="Enter your email"
                        variant="outlined" 
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
              />

            
            <br/>

            <label>
              <h2>Password</h2>
            </label>
            <TextField  sx={{ width: 300 }}
                        id="outlined-basic" 
                        label="Enter your password" 
                        variant="outlined" 
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
              />

            <br/><br/><br/>

           
            <Button type="submit" 
                    variant="contained"
                    className={styles.margin}>
                    Login
            </Button>
          

          </form>
          
           <br/><br/>
           <br/><br/>


          <Link href="/">&larr; Go back</Link>
     
      </div>
    );
  }
};

export default Login;
