import Link from "next/link";


import styles from "../styles/Home.module.css";
import { useAuth } from "./api/auth";

import Button from '@mui/material/Button';



export default function Home() {
  const { user, loading, signOut } = useAuth();

  return (
   

      <main className={styles.main}>
        
        {user ? (
          <>
            <p>Email: {user.email}</p>
            <p>UID: {user.uid}</p>
            <Button variant="contained" onClick={signOut}>Log Out</Button>
          </>
        ) : (
          <>
            <h2>Log in or Sign up to see data</h2>
            
              <Link href="/login">
                <div>
                  <Button variant="contained" >login</Button>
                </div>
              </Link>

              <br/>
              
              <Link href="/signup">
              <div>
                  <Button 
                  variant="contained">signup</Button>
                </div>
              </Link>
         
          </>
       )} 
      </main>
    
  );
}
