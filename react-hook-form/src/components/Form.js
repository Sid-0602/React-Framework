import '../App.css'
import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
export const Form = () =>{

    const schema = yup.object().shape({
        fullName: yup.string().required("Full Name is required!"),
        email: yup.string().email().required("Email is required!"),
        age : yup.number().positive().integer().min(18).required("Age is required!"),
        password: yup.string().min(4).max(23).required("Password is required!"),
        confirmPassword : yup.string().oneOf([yup.ref("password"),null],"Passwords Didn't match").required("Conform Your Password!")
    });

    const { register , handleSubmit,formState:{errors} } = useForm({
        resolver:yupResolver(schema),
    }); //creating a useForm hook to parse form info.

    const onSubmit = (data) =>{
        console.log(data);
        console.log("Form data submitted!");
    }

    return (
        <form className='App form' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Your Name..." {...register("fullName")}/>
            <br/><p>{errors.fullName?.message}</p><br/>
            <input type="text" placeholder="Email..."{...register("email")}/> 
            <br/><p>{errors.email?.message}</p><br/>
            <input type="number" placeholder="Age..."{...register("age")}/>
            <br/><p>{errors.age?.message}</p><br/>
            <input type="password" placeholder="Enter Passkey.."{...register("password")}/>
            <br/><p>{errors.password?.message}</p><br/>
            <input type="password" placeholder="Confirm Passkey.."{...register("confirmPassword")}/>
            <br/><p>{errors.confirmPassword?.message}</p><br/>
            <input type="submit"/>
        </form>
    )
}