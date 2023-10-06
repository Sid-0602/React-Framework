import './App.css';
import { Person } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person 
      name="Siddhant J"
      email= "sidbnjadhav@gmail.com"
      age={21}
      isMarried = {false}
      friends = {["Vaish","Sahil","Siddharth"]}
      />
    </div>
  );
}

export default App;
