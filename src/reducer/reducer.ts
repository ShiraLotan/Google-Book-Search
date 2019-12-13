import { Action } from '@ngrx/store'; 
import * as Actions from './../action/action';
import { UserName } from 'src/model/name.model';

const initialState: UserName = {
    name: ''
}


export function reducer(state: UserName[] = [initialState], action: any) {
    switch(action.type) {
        case Actions.USERNAME:
            debugger
            return [...state, action.payload.name];
        default:
            return state;
    }
}