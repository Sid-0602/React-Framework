
//This is task component: 

//Anything can be 
export const Task = (props) =>{
    return (
        <div>
            <h2>{props.taskName}</h2>
            <button> Mark as complete</button>
            <button onClick={()=> props.deleteTask(props.id)}>X</button>
        </div>
        )
};