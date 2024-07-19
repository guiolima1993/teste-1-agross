import React, { useState } from 'react';
import './ToDoItem.css';
import Modal from './Modal';

const ToDoItem = ({ todo, index, removeTodo, toggleTodo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [completedBy, setCompletedBy] = useState('');

  const formatDate = (date) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const handleToggle = () => {
    if (todo.completed) {
      toggleTodo(index); // Toggle back if already completed
      return;
    }
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    toggleTodo(index, completedBy);
    setIsModalOpen(false);
    setCompletedBy('');
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
            className="custom-checkbox"
          />
          <span className={`checkmark ${todo.completed ? 'completed' : ''}`}></span>
          <span className="status">
            {todo.completed ? 'Concluída' : 'Incompleta'}
          </span>
        </label>
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
        <div className="todo-dates">
          <span className="creation-date">
            Criada em: {formatDate(new Date(todo.createdAt))}
          </span>
          {todo.completed && (
            <span className="completion-date">
              Concluída em: {formatDate(new Date(todo.completedAt))} por: {todo.completedBy}
            </span>
          )}
        </div>
        <button className="remove-btn" onClick={() => removeTodo(index)}>
          Remover
        </button>
      </li>
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        onNameChange={setCompletedBy}
        name={completedBy}
      />
    </div>
  );
};

export default ToDoItem;
