// import * as actions from './actions';
import { combineReducers } from 'redux';
import * as types from './types';


export interface IState {
    loading: boolean,
    [prop: string]: any
}

interface IAction {
    type: string,
    [prop: string]: any
}

export const initialState: IState = {
    loading: false
}

 function loading(initial = initialState.loading, action: IAction): boolean {
    switch(action.type) {
        case types.CHANGE_LOADING:
            return action.loading
        default:
            return initial; 
    }
}

export default combineReducers({
    loading
})