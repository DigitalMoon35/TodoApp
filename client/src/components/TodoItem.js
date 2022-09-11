import React, {Fragment, useState} from 'react';
import EditModal from "./EditModal";

const TodoItem = ({todo, deleteTodo}) => {

    const [modalShow, setModalShow] = useState(false);

    return (
      <Fragment>
        <div className="todo">
            <li key={todo.todo_id}>{todo.description}</li> 
            <button 
            className="edit-button"
            onClick={() => setModalShow(!modalShow)}
            >Edit
            </button>
            <button 
            onClick={() => deleteTodo(todo.todo_id)} className="delete-button">
            Delete
            </button>
            <EditModal open={modalShow} todo={todo} onClose={() => setModalShow(false)}/>
        </div>
      </Fragment>
    );
};

export default TodoItem;