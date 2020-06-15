import Home from '../App'
import My from '../views/My'
import VideoView from '../views/VideoView'

export default [
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
    }
]