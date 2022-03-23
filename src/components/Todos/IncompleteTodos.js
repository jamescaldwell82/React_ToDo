import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SingleTodo from './SingleTodo'

export default function IncompleteTodos(props) {
    const [visibilityControl, setVisibilityControl] = useState(true);

    return (
        <article className="todo-incomplete">
            <h2 className="text-white p-4">Incomplete Tasks
                <button onClick={() => setVisibilityControl(!visibilityControl)} className="vControl btn btn-light m-2">
                    {visibilityControl === false ?
                        <FontAwesomeIcon icon={['fas', 'plus']} /> :
                        <FontAwesomeIcon icon={['fas', 'minus']} />}
                </button>
                <span className="todo-count">
                    ({props.filter === 0 ?
                        props.todos.filter(x => x.Done === false).length :
                        props.todos.filter(x => x.Done === false).filter(x => x.CategoryId === props.filter).length} items to complete)
                </span>
            </h2>
            {visibilityControl &&
                <>
                    {props.filter === 0 && props.todos.filter(x => x.Done === false).map(x =>
                        <SingleTodo
                            key={x.TodoId}
                            todo={x}
                            getTodos={props.getTodos} />
                    )}
                    {props.filter !== 0 && props.todos.filter(x => x.Done === false).filter(x => x.CategoryId === props.filter).map(x =>
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
