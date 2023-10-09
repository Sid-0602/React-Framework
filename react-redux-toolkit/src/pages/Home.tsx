import { useDispatch, useSelector } from 'react-redux';

export const Home = () =>{
    const username = useSelector((state: any)=>state.user.value.username);
    return <h1 className="App">This is Home page: {username}</h1>
}