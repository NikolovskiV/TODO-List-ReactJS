import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const initialState = JSON.parse(localStorage.getItem('todo')) || [];
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo])

  return (
    <div className="container">
      <div className="container__app__wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            isToggled={isToggled}
            setIsToggled={setIsToggled}
          />
        </div>
        <div>
          <TodoList
            todo={todo}
            setTodo={setTodo}
            setEditTodo={setEditTodo}
            isToggled={isToggled}
            setIsToggled={setIsToggled}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
