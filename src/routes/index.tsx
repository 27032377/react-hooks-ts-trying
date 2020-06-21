import React, { useReducer } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import routes from './routes'
import { initialState, reducer, Gcontext } from '../store'

export default function Routes () {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <Gcontext.Provider value={{ state, dispatch }}>
            <Router>
                <Switch>
                    {
                        routes.map(route => {
                            return (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    render={() => <route.component />}
                                    exact={!!route.exact}
                                ></Route>
                            )
                        })
                    }
                </Switch>
            </Router>
        </Gcontext.Provider>
    )
}