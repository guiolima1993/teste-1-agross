import React, { useState, useEffect } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import logo from './assets/logo-agross.png';
import img from './assets/effect.png'
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = (index, completedBy = null) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          completed: !todo.completed,
          completedAt: !todo.completed ? new Date().toISOString() : todo.completedAt,
          completedBy: !todo.completed ? completedBy : todo.completedBy,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <img src={logo} alt="Logo" className="logo" />
      <h6>Lista de Tarefas</h6>
      <img src={img} alt="Imagem de efeito" className="effect" />
      <ToDoForm addTodo={addTodo} />
      <ToDoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
};

export default App;
