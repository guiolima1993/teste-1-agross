import React, { useState } from 'react';

const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    const now = new Date();
    addTodo({
      text: value,
      createdAt: now.toISOString(), 
      completed: false,
      completedAt: null,
    });

    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default ToDoForm;
