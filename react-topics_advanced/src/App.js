import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';
import { useState, createContext } from 'react';
import { Query, QueryClient,QueryClientProvider } from '@tanstack/react-query';

//creating and using context is used to eliminate usage of props to parse data into components.
export const AppContext = createContext();
function App() {
  const [username, setUsername] = useState("Sid Jadhav"); //this is passed as props to profile->changeProfile.
  const client = new QueryClient({defaultOptions:{
    queries:{
      refetchOnWindowFocus: false, //this will not refresh data on tab switch.
    }
  }}); //client for react-query.
  return (
    <AppContext.Provider value={{username,setUsername}} >
    <QueryClientProvider client={client}>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>404! Page not found!!</h1>} />
      </Routes>
    </Router>
    </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default App;