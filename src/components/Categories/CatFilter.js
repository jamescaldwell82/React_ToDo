import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import CatCreate
 from './CatCreate'
export default function CatFilter(props) {
    const [showCreate, setShowCreate] = useState(false);
    return (
        <section className="catFilter mt-3">
            <button onClick={() => props.setFilter(0)} className="btn btn-light m-1">All</button>
            {props.categories.map(x =>
                <button onClick={() => props.setFilter(x.CategoryId)} key={x.CategoryId} className="btn btn-light m-1">{x.Name}</button>    
            )}
            <button className="catCreate m-1 btn btn-light" onClick={() => setShowCreate(!showCreate)}>
                {!showCreate ?
                <FontAwesomeIcon icon={['fas', 'plus']} /> :
                <FontAwesomeIcon icon={['fas', 'minus']} className="text-danger" />
}
            </button>
            {showCreate &&
                <CatCreate getCats={props.getCats} setShowCreate={setShowCreate}/>
            }
        </section>
    )
}
