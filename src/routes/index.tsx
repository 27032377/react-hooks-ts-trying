import React, { useReducer, Suspense } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import routes from './routes'
import { initialState, reducer, Gcontext } from '../store'
import loading from '../assets/images/loading.gif'

export default function Routes () {
    const [state, dispatch] = useReducer(reducer, initialState)
    /**
     * @todo 全屏居中样式暂时还没写
     */
    const fallback = (
        <div>
            <img src={loading} alt='loading' />
        </div>
    )
    return (
        <Gcontext.Provider value={{ state, dispatch }}>
            <Router>
                <Switch>
                    <Suspense fallback={fallback}>
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
        </Gcontext.Provider>
    )
}