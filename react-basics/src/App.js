import styles from "./App.module.css";
import { Users } from "./components/Users.js";
import { useState } from "react";


function App() {
  const users = [
    {name: "Elon", age:46},
    {name: "Jeff", age:50}
  ];

  //useStates in React: 
  //let person_age = 18;
  let [person_age,setAge] = useState(0); //this is useState function.
  const incrementAge = () =>{
    setAge(person_age + 1);
  }
  const decrementAge = () =>{
    setAge(person_age-1);
  }

  const setZeroAge = () =>{
    setAge(0);
  }
  //text component: 
  let [inputVal, setInputVal] = useState("");
  const handleInputVal = (event)=>{
    console.log(event.target.value); //this prints every change in text box.
    setInputVal(event.target.value);
  }

  //hide/show text: 
  let [showText, setForm] = useState(true);

  //this is how component is called into main App function.
  return (<div className={styles.App}>
    <User name="Siddhant" age={21} email="sid@gmail.com"/>
    <Jobs salary={2700000} position="Senior SDE" company="Amazon"/>
    <Jobs salary={1100000} position="SDE" company="Google" />
    <div> 
      <h2>Conditional Rendering</h2>
      <Age />
    </div> 
    <Color />
    <NamesList />
    <h1 style={{color:"Red"}}>This is Users component rendering</h1>
    {users.map((user,key)=>{
        return (
          <Users name = {user.name} age={user.age}/>
        )
      })}

    <h1>|| Click this button to increment/decrease/set to 0 ||</h1>
    <div>
      <h2>{person_age}</h2>
      <button onClick={incrementAge}>Increase</button>
      <button onClick={decrementAge}>Decrease</button>
      <button onClick={setZeroAge}>=ZERO</button>
    </div>
    <div>
      <input type="text" onChange={handleInputVal} /> {inputVal}
    </div>

    <div>
      <h2>Click to Change Visibility</h2>
      <button onClick={()=>{
        setForm(!showText);
      }}>Click</button>
      {showText === true && <h3>Hello there!</h3>}
    </div>
  </div> )
}

//just a JS function. 
// const GetName = () =>{
//   return "Siddhant"
// }

//component starts with capital letter always. 
const User = (props) =>{ 
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  )
}

//Conditional rendering in React: 
/*
It is a concept of rendering the components in a React application 
based on certain condition either true or false. This changes the display when conditions are set.
*/

const Age = () =>{
  const age= 20;
  if(age>18){
    return <h3>Legal</h3>
  }else{
    return <h3>Minor</h3>
  }
}

const Color = () =>{
  const isRed = true;
  return (
    <h2 style={{color: isRed ? "red" : "green",backgroundColor: isRed ? "yellow" : "pink"}}>This has color</h2>
  )
}
//props: This is used to pass data from one component to another.
// props becomes an object with the following structure: 
/*
  props = {
    name=" ",
    age=" ",
    email= " "
  }

*/
const Jobs = (props) =>{
  return (
    <div className={styles.name}>
      <h2>{props.salary} | {props.position} | {props.company} </h2>
    </div>
  )
}

//lists in react: 
const NamesList = ()=>{
  
  const names = ["Sid","Vaish","Abhi","Sahil","Raman","Tisha"];
  return (
    <div>
      <h1>Rendering List</h1>
      {/*For looping over lists, we can use map in react*/}
      {names.map((name,key) => {
        return <h3 key = {key}>{name}</h3>;
      })}
    </div>
    
    
  );
}

//Use States: 
/*
The useState() is a Hook that allows you to have state variables in functional components .
so basically useState is the ability to encapsulate local state in a functional component. 
*/


export default App;
