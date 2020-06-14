import My from '../views/My'
import VideoView from '../views/VideoView'

export default [
    {
        path: '/my',
        component: My
    },
    {
        path: '/video/:id',
        component: VideoView
    }
]