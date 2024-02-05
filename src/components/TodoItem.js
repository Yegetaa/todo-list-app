import React from 'react';


  
function TodoItem({ todo, handleToggleComplete, handleDeleteTodo }) {
    const {title} = todo;
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={() => handleToggleComplete(todo.id)}
        />
         <h3>{title}</h3>
        <button
          onClick={() => handleDeleteTodo(todo.id)}
          disabled={!todo.isComplete}
        >
          Delete
        </button>
        <button>Edit</button>
      </div>
    );
  }
  
  export default TodoItem;