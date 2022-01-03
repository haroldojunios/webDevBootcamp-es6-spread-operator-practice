import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="form">
      <input onChange={event => setInputText(event.target.value)}
        type="text" value={inputText} />
      <button onClick={() => { props.addItem(inputText); setInputText("") }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
