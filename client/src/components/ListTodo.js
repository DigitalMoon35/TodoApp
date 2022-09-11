import React, { Fragment, useEffect, useState } from "react";





const ListTodo = () => {
    
    const [todos, setTodos] = useState([]);
    
    // delete todos
    const deleteTodo = async (id) => {
        try {
            const todo = await fetch(
                `http://localhost:5050/todos/${id}`,
                {method: "DELETE"}
            );
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (error) {
            console.error(error.message);
        }
    }

    const getTodos = async () => {
        try {
            const todos = await fetch(
                "http://localhost:5050/todos"
            )
            const todosJSON = await todos.json();
            setTodos(todosJSON);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Fragment>
            <div className="todo-container">
                <ul>
                    {todos.map((todo, idx) => (
                        <div className="todo">
                        <li key={idx}>{todo.description}</li> 
                    <button className="edit-button">Edit</button>
                    <button onClick={() => deleteTodo(todo.todo_id)} className="delete-button">Delete</button>
                        </div>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default ListTodo;