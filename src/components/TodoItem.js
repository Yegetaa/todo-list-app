import React from 'react';
import { useState } from 'react';


  
/**
 * @param {{title: string, isComplete: boolean, id: number}} todo
 * @param {function(string): void} handleSave
 * @param {function(): void} handleToggleComplete
 * @param {function(number): void} handleDeleteTodo
 */

function TodoItem({ todo, dispatch, handleToggleComplete, handleDeleteTodo }) {
  const {title} = todo;
  const [showEdit, setShowEdit] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  /**
   * @param {Event} e 
   */
  const handleSaveClick = (e) => {
    e.preventDefault();
    setShowEdit(false);
    dispatch({ type: 'EDIT_TODO', payload: { id: todo.id, title: newTitle } });
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

      {showEdit ? (
        <>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
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
          <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
        </>
      )}

    </div>
  );
}
  
  export default TodoItem;