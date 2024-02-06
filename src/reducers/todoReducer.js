/**
 * Reducer function for managing todo items
 * @param {object[]} todos - Array of todo items
 * @param {object} action - Action object
 * @returns {object[]} New array of todo items
 */

export function todosReducer(todos, action) {
  switch (action.type) {
    case 'TOGGLE_COMPLETE':
      return todos.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          };
        }
        return todo;
      });
    case 'DELETE_TODO':
      return todos.filter(todo => todo.id !== action.id);

    case 'EDIT_TODO':
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title
          };
        }
        return todo;
      });

    case "ADD_TODO": {
      return [
        {
          id: new Date().getTime(),
          title: action.payload.title,
          isCompleted: false
        },
        ...todos
      ];
    }
    default:
      return todos;
  }
}