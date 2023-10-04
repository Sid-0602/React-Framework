import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState("Sid Jadhav"); //this is passed as props to profile->changeProfile.
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home username={username}/>} />
        <Route path='/profile' element={<Profile username={username} setUsername={setUsername}/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>404! Page not found!!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;