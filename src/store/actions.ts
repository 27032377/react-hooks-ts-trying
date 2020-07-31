import * as types from './types';

interface IPayload {
    type: string,
    [prop: string]: any
}

export function loading(bol: boolean): IPayload {
    return {
        type: types.CHANGE_LOADING,
        loading: bol
    }
}

export function navList(list: string[]): IPayload {
    return {
        type: types.GET_NAV_LIST,
        navList: list
    }
}