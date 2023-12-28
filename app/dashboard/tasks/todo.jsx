"use client"
import React, { useState, useEffect } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Periodically fetch updates from your backend
    const fetchTodos = async () => {
        try {
          const response = await fetch('http://localhost:3001/todos');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setTodos(data);
        } catch (error) {
          console.error('Fetch error:', error.message);
        }
      };
    const intervalId = setInterval(fetchTodos, 5000); // fetch every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo, index) => (
        <li key={index}>
        {todo.task}
        <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
          {todo.completed ? 'Completed' : 'Pending'}
        </span>
        <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
          {todo.transcriptReceived ? 'Transcript Received' : 'Transcript Pending'}
        </span>
      </li>
        ))}
      </ul>
    </div>
  );
}