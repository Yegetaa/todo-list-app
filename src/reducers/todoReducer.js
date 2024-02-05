export function todosReducer(todos, action) {
    switch (action.type) {
      case 'TOGGLE_COMPLETE':
        return todos.map(todo =>
          todo.id === action.id ? { ...todo, isComplete: !todo.isComplete } : todo
        );
      case 'DELETE_TODO':
        return todos.filter(todo => todo.id !== action.id);
      default:
        return todos;
    }
  }