import React, { Fragment, useState } from 'react';


function EditModal({ open, todo, onClose }) {

    const [description, setDescription] = useState(todo.description);

    if (!open) return null;
    return (
        <Fragment>
            <div className="overlay">
                <div className="modal-container">
                    <h1>Make your edit!</h1>
                    <div className="todo-box">
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        <button className="save-button">Save</button>
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