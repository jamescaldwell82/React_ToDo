import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import SingleTodo from './SingleTodo';
import './Todos.css'
import TodoCreate from './TodoCreate';
import CompleteTodos from './CompleteTodos';
import IncompleteTodos from './IncompleteTodos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import CatFilter from '../Categories/CatFilter';
import CatCreate from '../Categories/CatCreate';

library.add(fas);

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const { currentUser } = useAuth();
    const [filter, setFilter] = useState(0);

    const getTodos = () => {
        axios.get('https://todoapi.jamesrcaldwell.com/api/todoitems').then(response => {
            setTodos(response.data);
        })
    }

    const getCats = () => {
        axios.get('https://todoapi.jamesrcaldwell.com/api/categories').then(response => {
            setCategories(response.data);
        })
    }

    //Create
    const addTodo = (todo => {
        axios.post('https://todoapi.jamesrcaldwell.com/api/todoitems', todo).then(response => {
            getTodos();
            setShowCreateForm(false);
        })
    })

    useEffect(() => {
        getTodos();
        getCats();
    }, []);

    return (
        <section className="todos">
            <article className="intro text-white p-5">
                <h1>Tasks to Accomplish</h1>
            </article>
            <Container>
                <CatFilter categories={categories} filter={filter} setFilter={setFilter} getCats={getCats} />

                <div className="taskGallery">
                    {currentUser.email === 'james.caldwell82@outlook.com' &&
                    <>
                        <div className="galleryButtons text-right">
                            {showCreateForm === false ?
                                <button onClick={() => setShowCreateForm(true)} className="btn btn-black bold mb-3">
                                    Add New Task <FontAwesomeIcon icon={['fas', 'plus']} />
                                </button> :
                                <button onClick={() => setShowCreateForm(false)} className="btn btn-danger bold mb-3">
                                    Cancel <FontAwesomeIcon icon={['fas', 'times']} />
                                </button>
                            }
                        </div>
                            {showCreateForm &&
                                <TodoCreate
                                    categories={categories}
                                    addTodo={addTodo}
                                />
                            }
                            </>
                    }
                    <IncompleteTodos todos={todos} getTodos={getTodos} filter={filter} />
                </div>
            </Container>
            <hr />
            <Container>
                <div className="taskGallery">
                    <CompleteTodos todos={todos} getTodos={getTodos} filter={filter} />
                </div>
            </Container>

        </section>
    )
}
