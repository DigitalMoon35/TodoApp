import React, { Fragment, useState } from "react";


const InputTodo = () => {
    // component's state
    const [description, setDescription] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const body = { description };
            const response = await fetch("http://localhost:5050/todos/", {
                method: "POST", 
                headers: {"Content-type" : "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response)
        } catch (error) {
            console.error(error.message)        
        }
    }
    return (
        <Fragment>
            <h1 className="todo-list">Pern Todo List</h1>
            <div className="form-box">
            <form onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    className="todo-input" 
                    value={description}
                    onChange={e => {
                        setDescription(e.target.value)
                    }}
                />
                <button className="add-button">Add</button>  
            </form>
            </div>
        </Fragment>
    )
}

export default InputTodo;