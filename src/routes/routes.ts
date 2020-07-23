import Home from '../App'
import My from '../views/My'
import VideoView from '../views/VideoView'
import News from '../views/News'

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
    }
]

export default router;