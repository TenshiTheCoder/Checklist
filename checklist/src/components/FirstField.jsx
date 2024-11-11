import '../my-styles/firstField.css'; 

function FirstField() {
  return (
    <form className = "toDoForm">
      <label htmlFor ="toDo-task" className = "task-text" >Task: </label>
      <input type = "text" className = "toDo-task" placeholder ="What's the task?" required/>

      <label htmlFor = "toDo-location" className = "location-text">Location: </label>
      <input type = "text" className = "toDo-location" placeholder = "Where are we going?" required/>

      <label htmlFor = "toDo-date" className = "date-text">Date: </label>
      <input type = "date" className = "toDo-date" />

      <button type = "submit" className = "submit-button">Submit Task</button>
    </form>
  )
}

export default FirstField;