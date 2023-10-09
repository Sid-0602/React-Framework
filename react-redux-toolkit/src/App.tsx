import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import {Home} from "./pages/Home"
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
  <div className='App'>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>404! Page not found</h1>} />
        </Routes>
      </Router>
    </Provider>
  </div>
  )
}

export default App;
