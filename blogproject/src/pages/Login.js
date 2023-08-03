import React, { useState} from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setIsAuth }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const registerWithJwt = () => {
          navigate("/register");
    };
    const signInWithGoogle = () => {
        signInWithPopup(auth,provider).then((result) => {
            localStorage.setItem("isAuth",true);
            localStorage.setItem("userName",auth.currentUser.displayName);
            setIsAuth(true);
            navigate("/");
           }); 
    };
    const signInWithJwt = async () => {
        try{
            const response = await axios.post('https://localhost:44328/api/Authenticate/login',
            {
                "username": username,
                "password": password
                
              }
            );
            console.log(response.data);
            localStorage.setItem("isAuth",true);
            localStorage.setItem("userName",username);
            setIsAuth(true);
            if(response.status === 200)
            {
            navigate("/");
            }
            else{
                alert("Invalid Credentials");   
            }
        }
        catch (error) {
            console.error(error);
            alert("Invalid Credentials"); 
        }
        
    };
    return (
    <div className="login">
        
        <div><label>Username</label></div>
        <div className="text"> 
            <input  
            onChange={(event) => {
                setUsername(event.target.value);
            }}
            />;
        </div>
        
        
        <div><label>Password</label></div>
        <div className="text">    
            <input 
            onChange={(event) => {
                setPassword(event.target.value);
            }}
            />
        </div>
        
        <div>
        <button className="signin" onClick={signInWithJwt}>Login</button>
        <button className="signin" onClick={registerWithJwt}>Register</button>
        </div>
        <br></br>
        <div>Or</div>
        <p>Sign in with Google to Continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
    );
}


//export const StoreContext = React.createContext(null)
export default Login;