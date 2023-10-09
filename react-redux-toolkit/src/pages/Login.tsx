import { useState } from "react"
import { login, logout } from "../store";
import { useDispatch, useSelector } from 'react-redux';

export const Login = () =>{
    const [newUsername, setNewUsername] = useState("");

    const dispatch = useDispatch();
    const username = useSelector((state: any)=>state.user.value.username);
    return(
        <div className="App">
            <h1>This is Login Page</h1>
            <h1>{username}</h1>
            <input type="text" onChange={(e)=>{
                setNewUsername(e.target.value);
            }} />
            <div><br></br><button 
            onClick={()=>dispatch(login(
                {username: newUsername}))}
                >Submit Login</button></div> <br></br>
            <div><button>LOGOUT</button></div>
        </div>
    )
}