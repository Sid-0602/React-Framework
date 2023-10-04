import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';
import { useState, createContext } from 'react';

//creating and using context is used to eliminate usage of props to parse data into components.
export const AppContext = createContext();
function App() {
  const [username, setUsername] = useState("Sid Jadhav"); //this is passed as props to profile->changeProfile.
  return (
    <AppContext.Provider value={{username,setUsername}} >
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>404! Page not found!!</h1>} />
      </Routes>
    </Router>
    </AppContext.Provider>
  );
}

export default App;