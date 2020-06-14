import React, { useState } from 'react';

export default function My () {
    const [count, setCount] = useState(0)
    const addEv = () => {
        setCount(() => count + 1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={addEv}>Add</button>
        </div>
    )
}