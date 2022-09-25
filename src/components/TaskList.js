import React from "react";
import Task from "./Task"

function TaskList({tasks, deleteTask}) {
 const taskData = tasks.map((task)=> {
  return <Task key={task.text} text={task.text} category={task.category} deleteButton={() => deleteTask(task.text)}/>
 });

  return (
    <div className="tasks">{taskData}</div>
  );
}

export default TaskList;
