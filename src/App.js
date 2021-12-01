import './App.css';
import AppHeader from './components/appHeader/appHeader'
import SearchPanel from './components/searchPanel/searchPanel';
import FilterPanel from './components/filterPanel/filterPanel';
import TodoList from './components/todoList/todoList'
import TodoAddForm from './components/todoAddForm/todoAddForm';
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([
    {
      label: 'Drink Coffee',
      important: false,
      done: false,
      id: 1
    },
    {
      label: 'Make Awesome App',
      important: false,
      done: false,
      id: 2
    },
    {
      label: 'Have a lunchs',
      important: false,
      done: false,
      id: 3
    }
  ])
  return (
    <div className="App">
      <AppHeader />
      <div className="search-and-filter">
        <div className="search-and-filter-cont">
          <SearchPanel />
          <FilterPanel />
        </div>

      </div>
      <TodoList todos={todos} />
      <TodoAddForm />
    </div>
  );
}

export default App;
