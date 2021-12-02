import "./App.css";
import AppHeader from "./components/appHeader/appHeader";
import SearchPanel from "./components/searchPanel/searchPanel";
import FilterPanel from "./components/filterPanel/filterPanel";
import TodoList from "./components/TodoList/todoList";
import { useState } from "react";
import TodoAddForm from "./components/toAddForm/todoAddForm";

let maxId = 100;

function createTodoItem(label) {
  return {
    label,
    important: false,
    done: false,
    id: maxId++,
  };
}

const initialTodos = [
  createTodoItem("Drink coffee"),
  createTodoItem("Make Awesome App"),
  createTodoItem("Have a lunch"),
];
export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(label) {
    const newTodo = createTodoItem(label);
    setTodos([...todos, newTodo]);
  }
  function onToggleDone(todoId) {
    const toggleTodo = todos.find((item) => item.id === todoId);
    toggleTodo.done = !toggleTodo.done;
    const newTodos = todos.filter((item) => item.id !== todoId);
    setTodos([...newTodos, toggleTodo]);
  }
  function onDelete(todoId) {
    const newTodos = todos.filter((item) => item.id !== todoId);
    setTodos(newTodos);
  }
  function onToggleImportant (id) {
    setTodos(({todoData}) => {
        return {
            todoData: toggleProperty(todoData,id,'important ')
        }
    })
}

 function toggleProperty(arr,id,propName){
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem  = {...oldItem,[propName] : !oldItem[propName]};
    return [
        ...arr.slice(0,idx),
        newItem,
        ...arr.slice(idx+1)
    ];
}

  return (
    <div className="App py-5">
      <div className="col-md-4 offset-4">
        <AppHeader />
        <SearchPanel />
        <FilterPanel />
        <TodoList
          todos={todos}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
          onImportant={onToggleImportant}
        />
        <TodoAddForm addTodo={addTodo} />
      </div>
    </div>
  );
}
