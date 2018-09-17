/**
 * 用户业务状态
 * @author Ouyang
*/

import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

const initialState = 0;

export function counterReducer(state: number = initialState, action: Action) {
    console.log('action:', action);
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0;

        default:
            return state;
    }
}

