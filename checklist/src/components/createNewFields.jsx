import React, { useState } from 'react';
import FirstField from './firstField';

const createNewField = () => {
  return <FirstField isNew = {true}/>;
}
function NewFieldsButton() {
    const [numberOfFields, setNumberOfFields] = useState(1);

    const fieldsArray = new Array(numberOfFields).fill().map((_, index) => (
      <div key = {index}>{createNewField()}</div>
    ))

    

    const handleAddField = () => {
      setNumberOfFields(numberOfFields + 1);
    }

  return(
    <div>
      {fieldsArray.map((field, index) => (
        <div key={index}>{field}</div>
      ))}
      <button className = "add-button" onClick={handleAddField}>Add New Field</button>
      <button className = "remove-button" onClick={() => numberOfFields > 1 && setNumberOfFields(numberOfFields - 1)}>Remove Field</button>
    </div>
  )  
}

export default NewFieldsButton;