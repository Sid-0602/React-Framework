import { useState } from "react";

interface Props{
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[]; //list of strings
    country: Country;
}

export enum Country{
    Brazil = "Brazil",
    India = "India",
    France = "France"
}

export const Person = (props:Props) =>{
    //states in TS:
    const [name,setName] = useState<string>("");
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This person {props.isMarried ? "is":"is not"} Married!</h1>
            {props.friends.map((friend:string)=>(
                <h1>{friend}</h1>
            ))}
            <h1>Country is: {props.country}</h1>
        </div>
    )
}