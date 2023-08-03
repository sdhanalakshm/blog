import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        try{
            const response = await axios.post('https://localhost:44328/api/Authenticate/register',
            {
                "username": username,
                "email": email,
                "password": password
                
              }
            );
            console.log(response.data);
            
           
            if(response.data.status === "Success")
            {
            navigate("/login");
            }
            else{
                alert("Error Occured: Please register with proper credentials.");   
            }
        }
        catch (error) {
            console.error(error);
            alert("Error Occured: Please register with proper credentials."); 
        }

    };

    return (
        <div className="login">
            <div><label> Username</label></div>
        <div className="text">
            <input 
            onChange={(event) => {
                setUsername(event.target.value);
            }}
            />
        </div>
        <div><label> Email</label></div>
        <div className="text">    
            <input 
            onChange={(event) => {
                setEmail(event.target.value);
            }}
            />
        </div>
        <div><label> Password</label></div>
        <div className="text">    
            <input 
            onChange={(event) => {
                setPassword(event.target.value);
            }}
            />
        </div>
        <div>
        <button className="signin" onClick={register}>Register</button>
        </div>
        </div>
    );
    
}

export default Register;