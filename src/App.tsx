import React from 'react';
// import logo from './assets/images/logo.svg';
import './App.css';
import { Button } from 'antd-mobile';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './store/actions'
import Interfaces from '../namespace/Interfaces'

function App() {
  const loading = useSelector((state: Interfaces.IState) => state.loading)
  console.log('loading')
  console.log(loading);
  const dispatch = useDispatch();
  // const Loading = loading ? <img src={logo} className="App-logo" alt="logo" /> : null;
  const Loading = loading ? (<p>Loading</p>) : null;
  const clickEv = () => {
    dispatch(actions.loading(!loading));
  }
  return (
    <div>
      {Loading}
      <Button onClick={clickEv} type='primary'>change Loding</Button>
      <p>App</p>
    </div>
  )
}

export default App
