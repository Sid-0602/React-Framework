import React from "react";
import { ChangeProfile } from '../components/ChangeProfile'

export const Profile = (props) =>{
    return (
        <div>
            This is Profile Page of {props.username}
            <ChangeProfile setUsername={props.setUsername}/>
        </div>
    )

}