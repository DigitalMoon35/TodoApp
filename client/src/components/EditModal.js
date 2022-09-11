import React, { Fragment, useState } from 'react';


function EditModal({ open, todo, onClose }) {

    const [description, setDescription] = useState(todo.description);

    const onSave = async (e) => {
        e.preventDefault();
        try {
            const body = { description }
            const response = await fetch(
                `http://localhost:5050/todos/${todo.todo_id}`, 
                {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            )
            window.location = "/";
            console.log(response);
        } catch (error) {
            console.log(error.message)
        }
    }
    if (!open) return null;
    return (
        <Fragment>
            <div className="overlay">
                <div className="modal-container">
                    <h1>Make your edit!</h1>
                    <div className="todo-box">
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        <button 
                        onClick={(e) => onSave(e)}
                        className="save-button">Save</button>
                        <button 
                        onClick={onClose}
                        className="cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default EditModal;