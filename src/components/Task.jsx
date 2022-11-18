import React, { useContext, useState } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const Task = ({task}) => {
    const {removeTask, findItem} = useContext(TaskListContext)
    const [isActive, setActive] = useState(false);
    
    const handleToggle = () => {
    setActive(!isActive);
  };

    return (
        <li className="list-item">
            <span onClick={handleToggle} className= {isActive && "complete"} >{task.title}</span>
            <div>
                <button className="btn-delete task-btn" onClick={()=>removeTask(task.id)}>
                    <i className="fas fa-trash-alt" ></i>
                </button>
                <button className="btn-edit task-btn" onClick={()=>findItem(task.id)}>
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

export default Task
