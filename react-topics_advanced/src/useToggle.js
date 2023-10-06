import { useState } from "react"

export const useToggle = (intialVal = false) =>{
    
    const [state,setState] = useState(intialVal);

    const toggle = () =>{
        setState((prev)=>!prev)
    }

    return [state,toggle]; //in hooks, the return function should consist of logic and not UI components.
}

//what is hooks in react?
/*
    A Hook is a function that is used to abstract logic in react.
    Hook is different from function, as using hooks we can use features such as state and lifecycle of component.
*/

//Rules of react hooks: 
/*
    1. It should start with "use".
    2. It should be called in highest level of component 
    3. It has to be inside an component overall.
*/