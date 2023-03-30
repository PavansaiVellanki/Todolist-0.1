import { useState, useEffect } from "react";
import TaskCreate from "./Components/TaskCreate";
import TaskList from "./Components/TaskList";
import axios from "axios";

function App(){
    const [taskItems,setTaskItems]=useState([]);

    const fetchTaskItems= async()=>{
        const response = await axios.get("http://localhost:3001/taskItems")
        setTaskItems(response.data)
    }

    useEffect(()=>{
        fetchTaskItems();
    },[]);

    var date = new Date().toLocaleDateString("en-US", {
        "day": "numeric",
        "year": "numeric",
        "month": "short"
    });
    const createTask= async (task)=>{
        /*************/
        const response = await axios.post("http://localhost:3001/taskItems",{
            task
        })
        /************/
        const updateTaskItems=[
            ...taskItems,
            response.data
            /*{
                id: Math.round(Math.random()*9999),
                task
            }*/
        ];
        setTaskItems(updateTaskItems);
    }

    const deleteItemById=async (id)=>{
        await axios.delete(`http://localhost:3001/taskItems/${id}`)
        const updateTaskItems=taskItems.filter((item)=>{
            if(item.id!==id){
                return item.id!==id;
            }
        });
        setTaskItems(updateTaskItems);
    }

    const editItemById=async (id, editedItem)=>{
        const response = await axios.put(`http://localhost:3001/taskItems/${id}`,{
            task : editedItem
        })
        const updateTaskItems=taskItems.map((item)=>{
            if(item.id===id){
                return {...item, ...response.data};
                //return {...item, task:editedItem};
            }
            return item;
        });
        setTaskItems(updateTaskItems);
    }

    return (
        <div>
            <div className="header-div">
                <h2>To Do List</h2>
            </div>
            <TaskCreate onCreate={createTask}/>
            <h3>{date}</h3>
            <TaskList taskItems={taskItems} onDelete={deleteItemById} onEdit={editItemById}/>
            <div className="footer">
                <p className="copyright">©️ Pavan Sai, 2023<br/>Version 0.1</p>
            </div>
        </div>
    );
}

export default App;