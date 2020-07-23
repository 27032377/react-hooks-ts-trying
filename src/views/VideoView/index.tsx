import React, { useEffect, useReducer } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import { Button } from 'antd-mobile'

interface IState {
    counter: number
}

interface IAction {
    type: string
}

function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'add':
            return { ...state, counter: state.counter + 1 }
        case 'reduce':
            return { ...state, counter: state.counter - 1 }
        default:
            return state
    }
}

export default function VideoView() {
    const { id } = useParams()
    const routeMatch = useRouteMatch()
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    useEffect(() => {
        console.log('state update', state.counter);
        console.log(routeMatch);
    }, [state.counter, routeMatch])
    return (
        <div>
            <p>id: {id}</p>
            <p>counter: {state.counter}</p>
            <Button type='primary' onClick={() => dispatch({ type: 'add' })}>Add</Button>
            <Button type='warning' onClick={() => dispatch({ type: 'reduce'})}>Reduce</Button>
        </div>
    )
}