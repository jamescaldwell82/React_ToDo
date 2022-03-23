import React from 'react'
import ReactDOM from 'react-dom'
import Testing from './Testing'

//The below items are imported to bring in specific testing functionalities. First are some tools that will allow us to perform shallow rendering tests and clean up the data after the test. Second are tools to make the tests actually function
import {render, cleanup, getByTestId} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import Todos from '../Todos/Todos'
import { AuthProvider } from '../../contexts/AuthContext'
import CatRow from '../Categories/CatRow'
import CompleteTodos from '../Todos/CompleteTodos'

//This will clean up the data after each test
afterEach(cleanup);

it('renders w/o crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Testing/>, div);
})


it('renders Testing correctly', () => {
    const tree = renderer.create(
            <Testing Name='Joe' 
            Desc='Test' />
    ).toJSON();

    expect(tree).toMatchSnapshot();
})

it('renders Testing Desc prop correctly', () => {
    const {getByTestId} = render(<Testing Name="James" Desc="test"/>);

    expect(getByTestId('paragraph')).toHaveTextContent('test');
})

t




