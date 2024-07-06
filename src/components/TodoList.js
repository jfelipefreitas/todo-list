// src/components/TodoList.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import '../App.css'; // Importa o arquivo CSS principal para estilos

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Estudar React' },
        { id: 2, text: 'Fazer compras' },
        { id: 3, text: 'Ler um livro' }
    ]);

    const [newTodo, setNewTodo] = useState('');

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const addTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() !== '') {
            const newTask = { id: todos.length + 1, text: newTodo };
            setTodos([...todos, newTask]);
            setNewTodo('');
        }
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const editTodo = (id, newText) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <div className="todo-list">
            <h2>Minha Lista de Tarefas</h2>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    placeholder="Adicionar nova tarefa"
                    value={newTodo}
                    onChange={handleInputChange}
                />
                <button type="submit">Adicionar</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={deleteTodo}
                        onEdit={editTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

