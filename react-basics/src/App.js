import styles from "./App.module.css";
import { Users } from "./components/Users.js";


function App() {
  const users = [
    {name: "Elon", age:46},
    {name: "Jeff", age:50}
  ];
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



export default App;
