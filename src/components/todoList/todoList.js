import React from 'react'
import './todoList.css'

export default function TodoList({todos}) {
    return (
        <ul className="todo-list">
            {
                todos.map((item,index) => (
                    <li className="list-item" key={index}>{item.label}</li>
                ))
            }
        </ul>
    )
}
