import React from 'react'

export const initialState = {
    loading: false
}

interface IAction {
    type: string;
    [propName: string]: any;
}

export function reducer(state: any, action: IAction) {
    console.log(action)
    switch (action.type) {
        case 'changeLoading':
            return {...state, loading: !state.loading}
        default:
            return {...state}
    }
}

interface IContext {
    [prop: string]: any
}
const context: IContext = {}
export const Gcontext = React.createContext(context)