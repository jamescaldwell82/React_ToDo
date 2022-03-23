import React from 'react'

export default function Testing(props) {
    return (
        <section className="testing">
            <article className="text-center md-0 p-5">
                <h1>{props.Name}</h1>
                <p data-testid="paragraph">{props.Desc}</p>
            </article>
        </section>
    )
}
