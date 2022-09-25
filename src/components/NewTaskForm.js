import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

 const[text, setText] = useState("")
 const[category, setCategory] = useState("Code")

 const handleSubmit = (e) => {
  e.preventDefault();
  onTaskFormSubmit({text, category});
  setText("");
  setCategory("Code")
 }

 const optionDisplay = categories.map((cat) =>{
  if(cat === "All") { 
    return null
  }else {
  return <option key={cat}>{cat}</option>}
})

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        {optionDisplay}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
