import React, { useState } from 'react'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export default function CatRow(props) {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(props.category.Name);
    const [desc, setDesc] = useState(props.category.Description);

    const deleteCategory = () => {
        if (window.confirm(`Are you sure you want to delete ${props.category.Name}?`)) {
            axios.delete('https://todoapi.jamesrcaldwell.com/api/categories/' + props.category.CategoryId).then(response => { props.getCats() })
        }
    }

    const editCat = (e) => {
        const catToEdit = {
            CategoryId: props.category.CategoryId,
            Name: name,
            Description: desc
        };

        axios.put('https://todoapi.jamesrcaldwell.com/api/categories/', catToEdit).then(() => {
            setEditMode(false);
            props.getCats();
        })
    }

    return (

        <tr>
            {!editMode ?
                <>
                    <td onClick={() => setEditMode(true)}>
                        <span>
                            <button onClick={() => setEditMode(true)} className="editCat">
                                <FontAwesomeIcon icon={['fas', 'edit']} />
                            </button>
                        </span>
                        <span data-testid="catName" className="catName">{props.category.Name}</span>
                    </td>
                    <td onClick={() => setEditMode(true)}>{props.category.Description !== null ?
                        props.category.Description :
                        'No Description Provided'}
                    </td>
                    <td>
                        <button className="deleteCat" onClick={() => deleteCategory()}>
                            <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                        </button>
                    </td>
                </>
                :
                <>
                    <td>
                        <input type="text" className="form-control" defaultValue={name} onChange={(e) => setName(e.currentTarget.value)} placeholder="Name" />
                    </td>
                    <td>
                        <input type="text" className="form-control" defaultValue={desc} onChange={(e) => setDesc(e.currentTarget.value)} placeholder="Description" />
                    </td>
                    <td>
                        <button onClick={() => editCat()} className="editCat text-uppercase btn btn-warning m-1">Save</button>
                        <button onClick={() => setEditMode(false)} className="btn btn-danger m-1">Cancel</button>
                    </td>
                </>
            }
        </tr>
    )
}
