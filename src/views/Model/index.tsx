import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { Button } from 'antd-mobile';

const sub = new Set();

export default function Model() {
    const [count, setCount] = useState(0);
    const [point, setPoint] = useState(0);
    /**
     * @desc 依赖
     * @param {dependence} Array 没变化一次，useMemo的第一个参数，即回调函数会触发一次
     */
    // 如果需要每点击10次处罚一次更新
    // timeSwi每变化一次，useMemo回调函数就会触发一次
    // 通过(count%10 === 0)不可以，9-10-11等价于false-true-false，会发生2次变化
    const timeSwi = Math.floor(count / 10);
    const memorizedText = useMemo(() => {
        // 通过 useMemo 缓存了一个值，Date.now()
        console.log('run useMemo function', timeSwi);
        return `this is a memorized text ${Date.now()}`;
    }, [timeSwi])
    const memoEv = () => {
        setCount(count => count + 1);
    }
    // 每次点击都会创建一个函数，有额外的性能开销
    // const callbackEv = () => {
    //     setPoint(point => point + 1);
    // }

    /**
     * @desc useCall
     * 缓存一个函数，节省性能开销
     */
    const callbackEv = useCallback(() => {
        setPoint(point => point + 1);
    }, [])
    sub.add(callbackEv);
    console.log(sub.size);
    return (
        <div>
            <p>{memorizedText}</p>
            <p>You clicked {count} times.</p>
            <Button type='primary' onClick={memoEv}>Click Me</Button>
            <p>useCallback</p>
            <p>{point}</p>
            <Button type='warning' onClick={callbackEv}>Add</Button>
        </div>
    )
}