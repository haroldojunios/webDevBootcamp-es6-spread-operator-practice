import React, { useState } from 'react'

function ToDoItem(props) {
  const [strike, setStrike] = useState(false);

  return (
    <div onClick={() => setStrike(!strike)}>
      <li style={{ textDecoration: strike && "line-through" }}>{props.item}</li>
    </div>
  )
}

export default ToDoItem;
