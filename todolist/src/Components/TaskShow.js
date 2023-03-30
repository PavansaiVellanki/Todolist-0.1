import { useState } from "react";
import TaskEdit from "./TaskEdit";
function TaskShow({item, onDelete, onEdit}){
    const [isEditing, setIsEditing]=useState(false);

    const handleEdit=()=>{
        setIsEditing(!isEditing);
    }

    const handleSubmit=(id,editedItem)=>{
        setIsEditing(false);
        onEdit(id, editedItem);
    }

    let content = <p>{item.task}</p>;
    if(isEditing){
        content=<TaskEdit onSubmit={handleSubmit} item={item}/>; 
    }

    const handleDelete=()=>{
        onDelete(item.id);
    }
    return (
        <div className="task-div">
            <div>
                <div>{content}</div>  
                <i className="fa-solid fa-square-minus functions" onClick={handleDelete}></i>
                <i className="fa-solid fa-pen-to-square functions" onClick={handleEdit}></i>
            </div>
        </div>
    );
}

export default TaskShow;