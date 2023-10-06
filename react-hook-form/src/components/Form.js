import '../App.css'
import {useForm} from "react-hook-form"
import * as yup from 'yup';
export const Form = () =>{

    const { register , handleSubmit } = useForm(); //creating a useForm hook to parse form info.


    const onSubmit = (data) =>{
        console.log(data);
        console.log("Form data submitted!");
    }

    return (
        <form className='App form' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Your Name..." {...register("fullName")}/> <br/> <br/>
            <input type="text" placeholder="Email..."{...register("email")}/> <br/> <br/>
            <input type="number" placeholder="Age..."{...register("age")}/><br/> <br/>
            <input type="password" placeholder="Enter Passkey.."{...register("password")}/><br/> <br/>
            <input type="password" placeholder="Confirm Passkey.."{...register("confirmPassword")}/><br/> <br/>
            <input type="submit"/>
        </form>
    )
}