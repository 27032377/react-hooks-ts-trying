import React from 'react'
import { useParams } from 'react-router-dom'

export default function VideoView() {
    const { id } = useParams()
    return (
        <div>
            <p>
                id: {id}
            </p>
        </div>
    )
}