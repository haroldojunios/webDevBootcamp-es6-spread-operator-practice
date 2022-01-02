import React, { useState } from "react";

const items = [];

function App() {
  const [item, setItem] = useState("");

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
          onClick={() => { items.push(item); setItem("") }}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
