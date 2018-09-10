/**
 * 用户业务Action
 * @author Ouyang
*/

import { Action } from '@ngrx/store';

export const TOGGLE_USER = '[USER] TOGGLE USER';

export class ToggleUserAction implements Action {
    readonly type = TOGGLE_USER;
}

export type Actions
    = ToggleUserAction;
