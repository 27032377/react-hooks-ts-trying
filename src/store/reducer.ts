import { useReducer } from 'react'
import initialState from './state'

interface IAction {
    type: string;
    [propName: string]: any;
}

function reducer(state: any, action: IAction) {
    console.log(action)
    switch (action.type) {
        case 'changeLoading':
            return {...state, loading: !state.loading}
        default:
            return {...state}
    }
}
function useDispatch(action: IAction) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return dispatch(action)
}

export default useDispatch