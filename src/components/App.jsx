import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const [items, setItems] = useState([]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        addItem={(item) => { setItems(prevItems => [...prevItems, item]) }}
      />
      <div>
        <ul>
          {items.map((item, i) =>
            <ToDoItem
              key={i}
              id={i}
              item={item}
              onChecked={id =>
                setItems(prevItems =>
                  prevItems.filter((item, i) => i !== id)
                )}
            />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
