import React, { useEffect } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'

export default function VideoView() {
    const { id } = useParams()
    const routeMatch = useRouteMatch()
    useEffect(() => {
        console.log(routeMatch)
    })
    return (
        <div>
            <p>
                id: {id}
            </p>
        </div>
    )
}