import React from 'react';

const TodoList = ({ todo, setTodo, setEditTodo }) => {
  const handleDelete = ({ id }) => {
    setTodo(todo.filter((todos) => todos.id !== id));
  };

  const handleComplete = (todos) => {
    setTodo(
      todo.map((item) => {
        if (item.id === todos.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todo.find((todos) => todos.id === id);
    setEditTodo(findTodo);
  };

  return (
    <div>
      {todo.map((todos) => (
        <li className="item__list" key={todos.id}>
          <input
            type="text"
            value={todos.title}
            className={`input__list ${todos.completed ? 'complete' : ''}`}
            onChange={(e) => e.preventDefault()}
          />
          <div className="list-icons">
            <button
              className="complete__btn "
              onClick={() => handleComplete(todos)}
            >
              {todos.completed ? (
                <i className="fa fa-check-circle green"></i>
              ) : (
                <i className="fa fa-times-circle"></i>
              )}
            </button>
            <button className="edit__btn " onClick={() => handleEdit(todos)}>
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="delete__btn "
              onClick={() => handleDelete(todos)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
