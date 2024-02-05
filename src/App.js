import './App.css';
//import TodoList from './components/TodoList';
import TodoItem from "./components/TodoItem"
import { useReducer } from "react";
import { initialState } from "./data/todoData";
import { todosReducer } from "./reducers/todoReducer";

export default function App() {
  
  const [todos, dispatch] = useReducer(todosReducer, initialState);

  const handleToggleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', id });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', id });
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleToggleComplete={handleToggleComplete}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}