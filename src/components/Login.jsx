import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [inputDate, setInputDate] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue && inputDate) {
            setTodos([...todos, { task: inputValue, date: inputDate }]);
            setInputValue('');
            setInputDate('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    placeholder="Add a new task"
                />
                <input
                    type="date"
                    value={inputDate}
                    onChange={e => setInputDate(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo.task} - {todo.date}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
