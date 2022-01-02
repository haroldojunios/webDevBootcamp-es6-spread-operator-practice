import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text"
          value={item}
          onChange={event => setItem(event.target.value)}
        />
        <button
          onClick={() => { setItems(prevItems => [...prevItems, item]); setItem("") }}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, i) =>
            <ToDoItem
              key={i}
              id={i}
              item={item}
              onChecked={id => console.log(id)}
            />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
