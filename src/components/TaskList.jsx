import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {Array.isArray(tasks) && tasks?.length ? (
        <ul className="list">
          {Array.isArray(tasks) &&
            tasks?.map((task) => <Task task={task} key={task?.id} />)}
        </ul>
      ) : (
        <div className="no-tasks">No Task</div>
      )}
    </div>
  );
};

export default TaskList;
