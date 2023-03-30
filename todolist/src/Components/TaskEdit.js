import { useState } from "react";
function TaskEdit({item, onSubmit}){
    const [title,setTitle]=useState(item.task);
    const handleChange=(event)=>{
        setTitle(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        onSubmit(item.id,title);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="book-edit">
                <input value={title} onChange={handleChange}/>
                <div>
                    <button className="save">Save</button>
                </div>
            </form>
        </div>
    );
}
export default TaskEdit;