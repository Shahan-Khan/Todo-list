import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

function ToDoItem(props) {
    const [newText, setNewText] = useState(props.text);

    function handleEditChange(event) {
        setNewText(event.target.value);
    }

    function handleSaveClick() {
        props.onEdit(props.id, newText);
    }

  return (
    <div className="newItem">
    {props.isEditing ? (
        <div className="edit">
          <input type="text" value={newText} onChange={handleEditChange} />
          <button onClick={handleSaveClick}><SaveIcon /></button>
          <button onClick={() => props.setEditingItem(null)}><CloseIcon /></button>
        </div>) :(
        <div>
        <li>{props.text}</li>
        <button 
        className='editButton'
        onClick={() => props.setEditingItem(props.id)}>
        <EditIcon sx={{ fontSize: 30 }}/>
        </button>
        <button className='delButton' 
        onClick={() => {
            props.onDelete(props.id);
        }}>
        <DeleteIcon sx={{ fontSize: 30 }}/>
        </button>
        </div>)}
    </div>
  );
}

export default ToDoItem;
