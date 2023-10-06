import {Link} from 'react-router-dom';

export const Navbar = () =>{
    return(<div className='App'>
        <span><Link to="/">Home</Link>  </span> 
        <span><Link to="/profile">Profile</Link>  </span>
        <span><Link to="/contact">Contacts</Link>  </span>
        <span><Link to="/customHooks">Custom Hooks</Link> </span>
        <span><Link to="/props-types">Props Types in React</Link></span>
    </div>)
}