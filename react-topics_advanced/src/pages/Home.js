import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query"; 
import Axios from "axios";

export const Home = (props) =>{
    const {username} = useContext(AppContext);
    const { data, isLoading, isError, refetch } = useQuery(["cat"], ()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=> res.data);
    } );
    if(isLoading){
        return <h1 className="App">Loding...</h1>
    }
    if(isError){
        return <h1 className="App">URL Broken!!</h1>
    }
    return (
    <div className="App">
        <h1> This is home page for user : {username}</h1> <p>CAT FACT: {data?.fact}</p>
        <button onClick={refetch}>Refresh the Fact!</button>
    </div>
    );
}