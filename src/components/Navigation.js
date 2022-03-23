import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function Navigation() {
    const { currentUser, logout } = useAuth();
    
    return (
        <Navbar variant="dark" expand="md">
            <Navbar.Brand href="/"><span className="brandSpan">1</span>MORE</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Nav className="mr-auto">
                        {currentUser &&
                            <>
                                <Nav.Link href="#/todos">Todos</Nav.Link>
                                <Nav.Link href="#/categories">Categories</Nav.Link>
                                <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
                            </>
                        }
                        {currentUser === null &&
                            <>
                                <Nav.Link href="#/login">Login</Nav.Link>

                            </>
                        }
                    </Nav>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}
