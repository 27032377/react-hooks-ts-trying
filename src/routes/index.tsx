import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import routes from './routes'
import { Gcontext, Gstate } from '../store'

export default function Routes () {
    return (
        <Gcontext.Provider value={Gstate}>
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