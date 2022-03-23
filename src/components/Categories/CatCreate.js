import React, {useState} from 'react'
import './categories.css'
import axios from 'axios'

export default function CatCreate(props) {
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        const newCat = {
            Name: category,
            Description: description
        }

        axios.post('https://todoapi.jamesrcaldwell.com/api/categories', newCat).then(response => {
            props.getCats();
            props.setShowCreate(false);
        })
    }

    return (
        <article className="cat-create">
            <button className="close-button" onClick={() => props.setShowCreate(false)}>&times;</button>
            <h5 className="text-white">Create New Category</h5>
            <input type="text" className="form-control" placeholder="Enter New Category" onChange={(e) => setCategory(e.currentTarget.value)} />
            <input type="text" className="form-control" placeholder="Description" onChange={(e) => setDescription(e.currentTarget.value)}/>
            <button onClick={() => handleSubmit()} className="btn btn-dark">Create</button>
        </article>
    )
}
