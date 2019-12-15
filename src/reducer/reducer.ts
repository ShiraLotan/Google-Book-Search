import {AddToStateActionType, UserAction} from './../action/action';
import { UserName, WishListItem } from 'src/model/name.model';

const initialState: any = {
    name: '',
    wishlist: []
};


export function reducer(state: any = initialState, action: any) {
    switch(action.type) {
        case AddToStateActionType.ADD_NAME:
    return {...state, name: action.payload.name};
case AddToStateActionType.ADD_TO_WISHLIST:
    return {...state, wishlist: [...state.wishlist, action.payload.wishlist]};
    default:
        return state;
    }
}