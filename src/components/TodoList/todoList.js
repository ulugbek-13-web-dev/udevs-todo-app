import React from "react";
import TodoListItem from "./TodoListItem";
import "./todoList.css";
import { BsTrash } from "react-icons/bs";
import { FaExclamation } from "react-icons/fa";

const TodoList = ({ todos, onToggleDone, onDelete, onImportant }) => {
  return (
    <ul className="list-group">
      {todos.map((item) => (
        <li key={item.id} className="list-group-item todo-list">
          <TodoListItem
            {...item}
            onToggleDone={onToggleDone}
            onDelete={onDelete}
            onImportant={onImportant}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
