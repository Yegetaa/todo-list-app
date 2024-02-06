import './App.css';
//import TodoList from './components/TodoList';
import TodoItem from "./components/TodoItem"
import { useReducer, useState } from "react";
import { initialState } from "./data/todoData";
import { todosReducer } from "./reducers/todoReducer";
/**
 * Main application component
 */
export default function App() {
  /**
   * Local state for the todo titles
   * @type {string}
   */
  const [titles, setTitles] = useState('');

  /**
   * Local state for the todo items
   * @type {{ id: number, title: string, completed: boolean }[]}
   */
  const [todos, dispatch] = useReducer(todosReducer, initialState);

 
  /**
   * Toggle the completion status of a todo item
   * @param {number} id - The id of the todo item
   */
  const handleToggleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', id });
  };

  /**
   * Delete a todo item
   * @param {number} id - The id of the todo item
   */
  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', id });
  };

  /**
   * Submit a new todo title
   * @param {Event} e - The submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: { title: titles } });
    setTitles('');
  };



  return (
    <div className="App">
      <h1>To-Do App</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}
      >
        <input
          type="text"
          value={titles}
          onChange={(e) => setTitles(e.target.value)}
          placeholder="Add Todo..."
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
            handleToggleComplete={handleToggleComplete}
            handleDeleteTodo={handleDeleteTodo}
           
          />
        ))}
      </ul>
    </div>
  );
}