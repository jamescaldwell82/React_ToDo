import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import CatRow from './CatRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CatCreate from './CatCreate';

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [showCreate, setShowCreate] = useState(false);

    const getCats = () => {
        axios.get('https://todoapi.jamesrcaldwell.com/api/categories/').then(response => {
            setCategories(response.data);
        })
    }

    useEffect(() => {
        getCats()
    }, []);

    return (
        <section className="categories">
            <article className="intro text-white p-5">
                <h1>Categories</h1>
            </article>
            <section className="bg-warning p-2">
                <button onClick={() => setShowCreate(true)} className="btn btn-dark m-2">Add New Category&nbsp;
                    <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                </button>
                {showCreate &&
                    <CatCreate getCats={getCats} setShowCreate={setShowCreate} />
                }
            </section>
            <Container className="p-2">
                <table className="table table-dark table-bordered table-striped mt-4">
                    <thead>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {categories.map(x =>
                            <CatRow category={x} key={x.CategoryId} getCats={getCats} />

                        )}
                    </tbody>
                </table>
            </Container>
        </section>
    )
}
