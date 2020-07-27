import { lazy } from 'react'

const Home = lazy(()=> import(/* webpackChunkName: 'Home' */'../App'))
const My = lazy(() => import(/* webpackChunkName: 'My' */'../views/My'))
const VideoView = lazy(() => import(/* webpackChunkName: 'VideoView' */'../views/VideoView'))
const News = lazy(() => import(/* webpackChunkName: 'News' */'../views/News'))
const Model = lazy(() => import(/* webpackChunkName: 'Model' */'../views/Model'))

interface IRouter {
    path: string,
    component: any,
    exact?: boolean,
    meta?: object
}

const router: IRouter[] = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/my',
        component: My
    },
    {
        path: '/video/:id',
        component: VideoView
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/model',
        component: Model
    }
]

export default router;