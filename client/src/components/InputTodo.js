import React, { Fragment, useState } from "react";


const InputTodo = () => {
    const [description, setDescription] = useState("Peanut");
    return (
        <Fragment>
            <h1 className="todo-list">Pern Todo List</h1>
            <div className="form-box">
            <form>
                <input type="text" className="todo-input" value={description}/>
                <button className="add-button">Add</button>  
            </form>
            </div>
        </Fragment>
    )
}

export default InputTodo;