import React, { useRef, useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'

export default function TodoCreate(props) {
    const actionRef = useRef();
    const catRef = useRef();

    const [actionVal, setActionVal] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const todo = {
            Action: actionRef.current.value,
            Done: false,
            CategoryId: catRef.current.value
        }
    
        //put code here that will validate to check on stringLength and if the same todo has been created in the same category.
        
        props.addTodo(todo);

    }
    return (
        <div className="singleTodo createTodo text-white">
            {/* <h1>Create New Task</h1>
            <hr className="bg-white" /> */}
            <Form onSubmit={handleSubmit}>
                        <Form.Group id="action">
                            <Form.Control className="text-white" type="text" ref={actionRef} placeholder="Enter task..." />
                            {actionVal !== '' &&
                                <div className="text-danger">
                                    {actionVal}
                                </div>
                            }
                            <select className="form-control" ref={catRef}>
                                <option>Select a Category...</option>
                                {props.categories.map(x => 
                                    <option key={x.CategoryId} value={x.CategoryId}>{x.Name}</option>    
                                )}
                            </select>
                        </Form.Group>

                        <Form.Group id="button">
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </Form.Group>
            </Form>
        </div>
    )
}
