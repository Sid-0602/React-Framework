import {Link} from 'react-router-dom';

export const Navbar = () =>{
    <div className='App'>
        <Link to="/">Home</Link> 
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contacts</Link>
    </div>
}