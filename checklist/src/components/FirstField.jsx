import '../my-styles/firstField.css';
import "../my-styles/submittedFields.css"; 
import NewFieldsButton from './createNewFields';
import {React, useState, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';

function FirstField({isNew}) {

  const MAX_TASK_LENGTH = 100;
  const MAX_LOCATION_LENGTH = 35;
  const [task, setTask] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

const initialState = useMemo(() => {
  if(isNew) {
    setTask('');
    setLocation('');
    setDate('');
    setIsSubmitted(false);
  }
  return {task, location, date, isSubmitted};
}, [isNew, task, location, date, isSubmitted]);
  
console.log(`State:`, initialState)
  

  const isValidDate = (dateString) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }



  useEffect(() => {
    const storedTaskData = localStorage.getItem(`taskData`);
    if(storedTaskData) {
      const taskData = JSON.parse(storedTaskData);
      setTask(taskData.task);
      setLocation(taskData.location);
      setDate(taskData.date);
      setIsSubmitted(true);
    }
  }, []);

  

  const handleReset = () => {
    localStorage.removeItem(`taskData`);
    setIsSubmitted(false);
    setTask('');
    setLocation('');
    setDate('');
  }

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      if (!task || !location) {
        // Handle error: required fields are empty
        alert('Please fill in all required fields');
        console.error('Please fill in all required fields');
      } else if (task.length > MAX_TASK_LENGTH) {
        // Handle error: task is too long
        alert('Task length cannot exceed ${MAX_TASK_LENGTH} characters');
      } else if (!/^[a-zA-Z0-9\s]+$/.test(task)) {
        // Handle error: special characters in task title
        alert('Task cannot contain special characters');
        console.error('Task title cannot contain special characters');
      } else if (!/^[a-zA-Z0-9\s]+$/.test(location)) {
        // Handle error: special characters in location
        alert('Location cannot contain special characters');
        console.error('Location cannot contain special characters');
      } else if (location.length > MAX_LOCATION_LENGTH) {
        // Handle error: location is too long
        alert('Location length cannot exceed ${MAX_LOCATION_LENGTH} characters');
      } else if (date && !isValidDate(date)) {
        // Handle error: invalid date format
        alert('Please enter a valid date');
        console.error('Please enter a valid date');
      } else if (date && new Date(date) < new Date()) {
        // Handle Error: Past Date
        alert('Please enter a future date');
        console.error('Please enter a future date');
      } else if (date && new Date(date) > new Date(new Date().getFullYear() + 10, 11, 31)) {
        // Handle Error: Future Date
        alert('Please enter a date closer to the present');
        console.error('Date entered is too far in the future');
      } else {
        setIsSubmitted(true);
        const taskData = {
          task: task,
          location: location,
          date: date,
        };
        localStorage.setItem(`taskData`, JSON.stringify(taskData));
        }
      }
      catch (error) {
      console.error(error);
      // Handle error here (e.g., display error message to user)
    }
  };

  if(isSubmitted){
    return(
      <div className = "submittedForm">
        <p className = "submittedTask">Task: {task} </p>
        <p className = "submittedLocation">Location: {location} </p>
        {date && <p className = "submittedDate">Date: {date}</p>}
        <button onClick = {() => setIsSubmitted(false)} className = "edit-button">Clear Task</button>
        <button className = "reset-button" onClick = {handleReset}>Reset Task</button>
        <NewFieldsButton /> 
      </div>
    ); 
  } else {
    return (
      <form className = "toDoForm" onSubmit = {handleSubmit}>

      <label htmlFor ="toDo-task" className = "task-text" >Task: </label>
      <input type = "text" className = "toDo-task" placeholder ="What's the task?" maxLength = {100} required value = {task} onChange = {(e) => setTask(e.target.value)}/>

      <label htmlFor = "toDo-location" className = "location-text">Location: </label>
      <input type = "text" className = "toDo-location" placeholder = "Where are we going?" required value = {location} onChange = {(e) => setLocation(e.target.value)}/>

      <label htmlFor = "toDo-date" className = "date-text">Date: </label>
      <input type = "date" className = "toDo-date" value = {date} onChange = {(e) => setDate(e.target.value)}/>

      <button type = "submit" className = "submit-button">Submit Task</button>

    </form>
    )

    
  } 
}

FirstField.propTypes = {
  isNew: PropTypes.bool,
};

export default FirstField;