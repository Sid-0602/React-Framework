import React, { useContext } from "react";
import { ChangeProfile } from '../components/ChangeProfile'
import { AppContext } from "../App";

export const Profile = (props) =>{
    const {username, setUsername} = useContext(AppContext);
    return (
        <div>
            This is Profile Page of {username}
            <ChangeProfile setUsername={setUsername}/>
        </div>
    )

}