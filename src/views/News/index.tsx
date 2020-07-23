import React, { useRef, useState } from 'react'
import { InputItem, Button } from 'antd-mobile'
// import { isObject } from '../../utils/tools'

export default function News () {
    const refInput = useRef<any>(null);
    const [counter, setCounter] = useState(0);
    // 用于缓存值
    const prevCounter = useRef<any>(counter);
    // 如果定义一个基础类型来缓存前值，每次重新render时，又会变为初始值
    // let prevCounter = null
    const focusEv = () => {
        // 获取当前input元素并聚焦
        refInput.current.focus();
        // if (isObject(refInput) && isObject(refInput.current) && typeof refInput.current === 'function') {
        // }
    }
    return (
        <div>
            <InputItem ref={refInput} />
            <Button onClick={focusEv}>Focus</Button>
            <p>现在的值Now：{counter}</p>
            <p>之前的值Pre: {prevCounter.current}</p>
            <Button onClick={() => {
                prevCounter.current = counter
                setCounter(x => x + 1)
            }}>Add</Button>
            <Button onClick={() => {
                prevCounter.current = counter
                setCounter(x => x - 1)
            }}>Reduce</Button>
        </div>
    )
}