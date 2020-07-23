import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Button } from 'antd-mobile'

const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee'
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222'
    }
}

interface anyObj {
    [propname: string]: any
}

let initialValue: anyObj = {
    theme: themes.light,
    toggle: () => {}
}
// 创建了一个 context 对象，参数对象即为 context 的初始值
const ThemeContext = React.createContext(initialValue)

// context 自上而下，一层层传递，获取 context 为最近上级组件的 Provider 的 value 值
function ThemedButton() {
    const context = useContext(ThemeContext);
    return (
        <Button
            style={{
                background: context.theme.background,
                color: context.theme.foreground
            }}
            onClick={context.toggle}
        >
        Styled by theme context!
      </Button>
    )
}

function Toolbar() {
    return (
      <div>
        <ThemedButton />
      </div>
    )
}
function App() {
    const [theme, setTheme] = useState(themes.dark);
    return (
    // Provide，context 的提供者
      <div>
        <ThemeContext.Provider value={{
            theme,
            toggle: () => {
                setTheme(() => {
                    return theme === themes.dark ? themes.light : themes.dark
                })
            }
        }}>
            <Toolbar />
        </ThemeContext.Provider>
      </div>
    )
}

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
            <App />
        </div>
    )
}