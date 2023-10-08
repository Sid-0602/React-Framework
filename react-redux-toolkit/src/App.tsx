import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import {Home} from "./pages/Home"
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { Provider } from 'react-redux';

function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>404! Page not found</h1>} />
      </Routes>
    </Router>
  </div>
  )
}

export default App;
