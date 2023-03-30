import TaskShow from "./TaskShow";

function TaskList({taskItems, onDelete, onEdit}){
    const renderItems=taskItems.map((item)=>{
        return <TaskShow onDelete={onDelete} onEdit={onEdit} key={item.id} item={item}/>
    });
    return (
        <div>{renderItems}</div>
    );
}
export default TaskList