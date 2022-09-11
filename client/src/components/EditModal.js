import React, { Fragment, useState } from 'react';


function EditModal({ open, todo, onClose }) {

    const [description, setDescription] = useState(todo.description);

    if (!open) return null;
    return (
        <Fragment>
            <div className="overlay">
                <div className="modal-container">
                    <h1>Make your edit!</h1>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <button>Save</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </Fragment>
    );
}

export default EditModal;