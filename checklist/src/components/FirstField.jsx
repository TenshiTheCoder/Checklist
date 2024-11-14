import '../my-styles/firstField.css'; 
import {React, useState} from 'react';

function FirstField() {
  const [task, setTask] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isValidDate = (dateString) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      if (!task || !location) {
        // Handle error: required fields are empty
        console.error('Please fill in all required fields');
      } else if (date && !isValidDate(date)) {
        // Handle error: invalid date format
        console.error('Please enter a valid date');
      } else {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error(error);
      // Handle error here (e.g., display error message to user)
    }
  };


  if(isSubmitted){
    return(
      <form className = "submittedForm">
        <p className = "submittedTask">Task: {task}</p>
        <p className = "submittedLocation">Location: {location}</p>
        {date && <p className = "submittedDate">Date: {date}</p>}
      </form>
    ); 
  } else {
    return (
      <form className = "toDoForm" onSubmit = {handleSubmit}>

      <label htmlFor ="toDo-task" className = "task-text" >Task: </label>
      <input type = "text" className = "toDo-task" placeholder ="What's the task?" required value = {task} onChange = {(e) => setTask(e.target.value)}/>

      <label htmlFor = "toDo-location" className = "location-text">Location: </label>
      <input type = "text" className = "toDo-location" placeholder = "Where are we going?" required value = {location} onChange = {(e) => setLocation(e.target.value)}/>

      <label htmlFor = "toDo-date" className = "date-text">Date: </label>
      <input type = "date" className = "toDo-date" value = {date} onChange = {(e) => setDate(e.target.value)}/>

      <button type = "submit" className = "submit-button">Submit Task</button>

    </form>
    )
  } 
}

export default FirstField;