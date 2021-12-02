import React from "react";
import { BsTrash } from "react-icons/bs";
import "./todoList.css";
import { FaExclamation } from "react-icons/fa";

const TodoListItem = ({
  label,
  onToggleDone,
  id,
  important,
  done,
  onDelete,
  onImportant,
}) => (
  <span className="todo-list-item">
    <span
      className="todo-list-item-label"
      style={{ textDecoration: done ? "line-through" : "none" }}
      onClick={() => onToggleDone(id)}
    >
      {label}
    </span>
    <span className="todo-list-item-icons">
      <button
        type="button"
        className="btn btn-outline-danger btn-sm mr-2"
        onClick={() => onDelete(id)}
      >
        <BsTrash />
      </button>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm mr-2"
        style={{ fontWeight: important ? "bold" : "normal" }}
        onClick={() => onImportant(important)}
      >
        <FaExclamation />
      </button>
    </span>
  </span>
);

export default TodoListItem;
