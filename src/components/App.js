import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Footer from "./Footer";

function App() {
  // State to store the list of items
  const [items, setItems] = useState([]);
  // State to keep track of the item currently being edited
  const [editingItem, setEditingItem] = useState(null);

  // Function to add a new item to the list
  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  // Function to delete an item from the list by its id
  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  // Function to edit an existing item by its id
  function editItem(id, newText) {
    setItems(prevItems => {
      return prevItems.map((item, index) => {
        if (index === id) {
          return newText;
        }
        return item;
      });
    });
    setEditingItem(null);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div className="content">
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onDelete={deleteItem}
              onEdit={editItem}
              isEditing={editingItem === index}
              setEditingItem={setEditingItem}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
