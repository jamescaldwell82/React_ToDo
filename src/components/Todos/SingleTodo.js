import React from 'react'
import axios from 'axios'
import { useAuth } from '../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export default function SingleTodo(props) {
    const { currentUser } = useAuth();

    const toggleTodo = (done) => {
        const todo = {
            TodoId: props.todo.TodoId,
            Action: props.todo.Action,
            Done: done,
            CategoryId: props.todo.CategoryId
        }

        axios.put(`https://todoapi.jamesrcaldwell.com/api/todoitems`, todo).then(() => {
            props.getTodos();
        })

    }

    const deleteTodo = (id) => {
        if (window.confirm(`Are you sure you want to delete ${props.todo.Action}?`)) {
            axios.delete(`https://todoapi.jamesrcaldwell.com/api/todoitems/${id}`).then(() => { props.getTodos() })
        }
    }

    return (
        <div className="singleTodo">
            {currentUser.email === 'james.caldwell82@outlook.com' &&
                <button id="deleteLink" onClick={() => deleteTodo(props.todo.TodoId)}>
                    <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                </button>
            }
            {currentUser.email !== 'james.caldwell82@outlook.com' ?
            <h1>{props.todo.Action}</h1> :    
            <h1>{props.todo.Action}
                {props.todo.Done === true ?
                    <span className="text-success" onClick={() => toggleTodo(!props.todo.Done)} title="Click to update status...">Complete</span> :
                    <span className="text-danger" onClick={() => toggleTodo(!props.todo.Done)} title="Click to update status...">In Progress</span>
                }
            </h1>
        }
            <p>{props.todo.Category.Name}</p>
        </div>
    )
}
