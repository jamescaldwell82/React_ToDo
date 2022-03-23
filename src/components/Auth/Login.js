import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Container, Card, Jumbotron } from 'react-bootstrap'
import { useHistory } from 'react-router';
import './Login.css'

export default function Login() {
    const { authenticate } = useAuth();
    const history = useHistory();

    async function handleAuth() {
        await authenticate();
        history.push('/todos');
    }
    return (
        <section className="login">
            <article>
                <h1>Login</h1>
                <button className="btn btn-info" onClick={() => handleAuth()}>Login w/ GitHub</button>
            </article>
        </section>
    )
}
