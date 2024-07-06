// src/components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleDelete = () => {
        onDelete(todo.id);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        onEdit(todo.id, editText);
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setEditText(todo.text);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setEditText(e.target.value);
    };

    return (
        <li className="todo-item">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editText}
                        onChange={handleChange}
                    />
                    <button onClick={handleSaveEdit}>Salvar</button>
                    <button onClick={handleCancelEdit}>Cancelar</button>
                </>
            ) : (
                <>
                    <span>{todo.text}</span>
                    <div>
                        <button onClick={handleEdit}>Editar</button>
                        <button onClick={handleDelete}>Excluir</button>
                    </div>
                </>
            )}
        </li>
    );
};

export default TodoItem;


