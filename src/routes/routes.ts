import { lazy } from 'react'

const Home = lazy(()=> import('../App'))
const My = lazy(() => import('../views/My'))
const VideoView = lazy(() => import('../views/VideoView'))
const News = lazy(() => import('../views/News'))
const Model = lazy(() => import('../views/Model'))

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