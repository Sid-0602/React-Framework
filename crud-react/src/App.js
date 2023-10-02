import './App.css';
import {useState} from "react";
import { Task } from './Task';

function App() {
    const [todoList, setTodoList] = useState([]); //initial state is empty array. 
    const [newTask, setNewTask] = useState(""); //this is used to track input box. 

    const handleChange =(event) =>{
        setNewTask(event.target.value);
    };

    const addTask = ()=>{
        //this adds newTask into todoList.
        const task = {
            id: todoList.length === 0 ? 1: todoList[todoList.length-1].id+1,
            taskName: newTask,
        }; 
        setTodoList([...todoList,task]);
    };

    const deleteTask = (id) =>{
        //to delete, we use filter function. 
        setTodoList(todoList.filter((task)=> task.id!==id));
    };
    return (
    <div className="App">
        <div className="addTask">
            <input onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>
        </div>

        <div className="list">
            {todoList.map((task)=>{
                return <Task taskName={task.taskName} id= {task.id} deleteTask={deleteTask}/> 
            })}
        </div>
    </div> 
    )
}

export default App;
