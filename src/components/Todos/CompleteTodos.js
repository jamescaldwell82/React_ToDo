import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import SingleTodo from './SingleTodo'

export default function CompleteTodos(props) {
    const [visibilityControl, setVisibilityControl] = useState(false);

    const getNumberOfTodos = () => {
        if (props.filter !== 0) {
            return props.todos.filter(x => x.Done === true).filter(x => x.CategoryId === props.filter).length;
        }
        else {
            return props.todos.filter(x => x.Done === true).length; 
        }
    }
    return (
        <article className="todo-complete">
            <h2 className="text-white p-4">Completed Tasks
                <button onClick={() => setVisibilityControl(!visibilityControl)} className="vControl btn btn-light m-2">
                    {visibilityControl === false ?
                        <FontAwesomeIcon icon={['fas', 'plus']} /> :
                        <FontAwesomeIcon icon={['fas', 'minus']} />}
                </button>
                <span className="todo-count">
                    ({getNumberOfTodos()} item{getNumberOfTodos() === 1 ? '' : 's'} completed)
                </span>
            </h2>

            {visibilityControl &&
                <>
                    {props.filter === 0 && props.todos.filter(x => x.Done === true).map(x =>
                        <SingleTodo
                            key={x.TodoId}
                            todo={x}
                            getTodos={props.getTodos} />
                    )}
                    {props.filter !== 0 && props.todos.filter(x => x.Done === true).filter(x => x.CategoryId === props.filter).map(x =>
                        <SingleTodo
                            key={x.TodoId}
                            todo={x}
                            getTodos={props.getTodos} />
                    )}
                </>
            }
        </article>
    )
}
