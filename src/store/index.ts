import React from 'react'
import initialState from './state'
import reducers from './reducer'

export const Gcontext = React.createContext(initialState)
export const Gstate = initialState
export const Greducer = reducers