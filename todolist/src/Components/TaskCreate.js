import { useState } from "react";
function TaskCreate({onCreate}){
    const [task,setTask]=useState("");
    const changeHandler=(event)=>{
        setTask(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        onCreate(task);
        setTask("");
    }
    return (
        <div className="input-form">
            <form onSubmit={submitHandler}>
                <input placeholder="Add your tasks..." onChange={changeHandler} value={task}/>
                <button>Add Task</button>
            </form>
        </div>
    );
}

export default TaskCreate;