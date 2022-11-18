import React, { useContext, useEffect, useState } from 'react'
import { TaskListContext } from '../contexts/TaskListContext';


const TaskForm = () => {
    const {addTask, clearTask, editItem, editTask} = useContext(TaskListContext)
    const [title, setTitle] = useState("")
    const handleChange = e =>{
        setTitle(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        
        if (!editItem){
            addTask(title)
            setTitle("")
        }
        else{
            editTask(title, editItem.id)
        }
    }


    useEffect(() => {
       editItem ? setTitle(editItem.title) : setTitle('')        
    }, [editItem])

    return (
        <form onSubmit = {handleSubmit} className="form">
            <input type="text" 
            className="task-input" 
            placeholder= "Add Task..."
            required 
            onChange = {handleChange} 
            value = {title}/>

            <div className="buttons">
                <button type='submit' className="btn add-task-btn" >
                    {editItem ? "Edit Task" : "Add Task"}
                </button>
                <button className="btn clear-btn" onClick={clearTask}>
                    Clear
                </button>
            </div>
        </form>
    )
}

export default TaskForm;
