import {useState} from "react";
import {v4 as uuidv4} from "uuid";
export default function TodoApp(){
    let[todos,setTodos]=useState([{task:"simple Task",id:uuidv4()}]);
    let [newTodo,setNewtodo]=useState("");

    let addNewTask=()=>{
        setTodos([...todos,newTodo]);
        setNewtodo("");
    };

    let updateTodoValue=(event)=>{
        setNewtodo(event.target.value);
    }
    return(
        <div>
            <input placeholder="Add a tast" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h3>Todo App</h3>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </div>
    )
}