import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
const [task, setTask] = useState(TASKS)
const [selectedCategory, setSelectedCategory] = useState("All")

const handleDeletedTask = (deletedTask) => {
 setTask(task.filter((t)=> t.text !== deletedTask))
}

function  handleSubmitTask(e) {
  setTask([...task, e]);
}

const handleSelectedCategory = (cat) => {
  setSelectedCategory(cat)
  setTask(task.filter((t)=> t.category === cat))
  if (cat === "All"){
    setTask(TASKS)
  }
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectedCategory={handleSelectedCategory} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmitTask}/>
      <TaskList tasks={task} deleteTask={handleDeletedTask}/>
    </div>
  );
}

export default App;
