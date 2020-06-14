import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import routes from './routes'

export default function Routes () {
    return (
        <Router>
            <Switch>
                {
                    routes.map(route => {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                component={route.component}
                            ></Route>
                        )
                    })
                }
            </Switch>
        </Router>
    )
}