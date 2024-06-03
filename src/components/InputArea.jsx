import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Alert from '@mui/material/Alert';

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} placeholder="Add an item..."/>
      
      <button
        className="addButton"
        onClick={() => {
        if(inputText===""){
            setShowAlert(true);
        }else {
            props.onAdd(inputText);
            setInputText("");
        }
        }}
      >
        <span><AddIcon /></span>
      </button>
      {showAlert && (
            <Alert onClose={() => setShowAlert(false)} severity="warning">
                Please write an item first.
            </Alert>
        )}
    </div>
  );
}

export default InputArea;
