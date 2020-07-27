import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import routes from './routes';
import Loading from '../components/Loading';

export default function Routes () {
    return (
        <Router>
            <Switch>
                <Suspense fallback={<Loading />}>
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
                </Suspense>
            </Switch>
        </Router>
    )
}