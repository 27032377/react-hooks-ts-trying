import React, { useContext } from 'react'
import logo from './logo.svg'
import './App.css'
import { Gcontext } from './store'
import { Button } from 'antd-mobile'

function App() {
  const context = useContext(Gcontext)
  console.log('context')
  console.log(context)
  const Loading = context.state.loading ? <img src={logo} className="App-logo" alt="logo" /> : null
  const clickEv = () => {
    context.dispatch({
      type: 'changeLoading'
    })
  }
  return (
    <div>
      {Loading}
      <Button onClick={clickEv} type='primary'>change Loding</Button>
    </div>
  )
}

export default App
