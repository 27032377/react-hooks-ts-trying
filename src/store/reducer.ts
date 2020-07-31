import { combineReducers } from 'redux';
import * as types from './types';

export interface IState {
    loading: boolean,
    navList: Array<string>,
    [prop: string]: any
}

interface IAction {
    type: string,
    [prop: string]: any
}

export const initialState: IState = {
    loading: false,
    navList: ['']
}

function loading(initial = initialState.loading, action: IAction): boolean {
    switch(action.type) {
        case types.CHANGE_LOADING:
            return action.loading
        default:
            return initial; 
    }
}

function navList(initial = initialState.navList, action: IAction): string[] {
    switch(action.type) {
        case types.GET_NAV_LIST:
            return action.navList;
        default:
            return initial
    }
}

export default combineReducers({
    loading,
    navList
})