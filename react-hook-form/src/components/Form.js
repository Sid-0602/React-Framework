import '../App.css'
import {useForm} from "react-hook-form"
export const Form = () =>{
    return (
        <form className='App form'>
            <input type="text" placeholder="Your Name..."/> <br/> <br/>
            <input type="text" placeholder="Email..."/> <br/> <br/>
            <input type="text" placeholder="Age..."/><br/> <br/>
            <input type="password" placeholder="Enter Passkey.."/><br/> <br/>
            <input type="password" placeholder="Confirm Passkey.."/><br/> <br/>
            <input type="submit"/>
        </form>
    )
}