import React from 'react';
import './App.css';
import { Person, Country } from './components/Person';

function App() {
  return (
    <div className='App'>
      <Person 
      name="Siddhant J"
      email= "sidbnjadhav@gmail.com"
      age={21}
      isMarried = {false}
      friends = {["Vaish","Sahil","Siddharth"]}
      country={Country.India}/>
    </div>
  );
}

export default App;
