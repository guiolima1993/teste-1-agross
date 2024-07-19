import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          index={index}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;

