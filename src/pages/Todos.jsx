import { useState } from "react";
import initialTodos from "../data/todos";

const Todos = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todos</h2>
      {todos.map((todo) => (
        <div key={todo.id} className="item-box">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.completed ? "todo-text done" : "todo-text"}>
            {todo.title}
          </span>
          <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};


export default Todos;

