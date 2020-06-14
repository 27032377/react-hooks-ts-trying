import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Button } from 'antd-mobile'

export default function My () {
    const location = useLocation()
    const history = useHistory()
    useEffect(() => {
        console.log(location)
        console.log(history)
    })
    const [count, setCount] = useState(0)
    const addEv = () => {
        setCount(() => count + 1)
    }
    return (
        <div>
            <p>{count}</p>
            <Button type='warning' onClick={addEv}>Add</Button>
        </div>
    )
}