import React from "react";

const categoryColors ={
  Trabalho: "#f3a806b7",
  Pessoal: "#d310a9c9",
  Estudos: "#23d6f5cc",
}

const Todo = ({ todo, removeTodo, completeTodo }) => {

  const bgColor =categoryColors[todo.category] || "#ccc"

  return (
    <div
      className="todo"
      style={{background: bgColor, textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
