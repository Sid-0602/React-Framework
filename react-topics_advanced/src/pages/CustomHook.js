import { useToggle } from "../useToggle";

export const CustomHooks = () =>{
    const [isVisible, toggle] = useToggle(true);
    const [isVisible2,toggle2] = useToggle();

    return(
        <div className="App">
            <button className="App" onClick={toggle}>
                {isVisible?"Hide": "Show"}
            </button>
            {isVisible && <h1>Hidden Text</h1>}

            <button className="App" onClick={toggle2}>
                {isVisible2?"Hide": "Show"}
            </button>
            {isVisible2 && <h1>Hidden Text</h1>}
        </div>
    );

};