import './App.css';

function App() {

  //this is how component is called into A
  return <div className="App">
    <User name="Siddhant" age={21} email="sid@gmail.com"/>
    <User /> 
  </div>;
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

//props: This is used to pass data from one component to another.
// props becomes an object with the following structure: 
/*
  props = {
    name=" ",
    age=" ",
    email= " "
  }

*/



export default App;
