import { Action } from '@ngrx/store';
import { UserName, WishListItem } from 'src/model/name.model';

export enum AddToStateActionType{
    ADD_NAME = '[ADD_NAME] add name',
    ADD_TO_WISHLIST = '[ADD_TO_WISHLIST] add to wishlist'
}

export class AddWelcomeNameAction implements Action {
    readonly type = AddToStateActionType.ADD_NAME;

    constructor(public payload: UserName){}
}

export class AddToWishList implements Action {
    readonly type = AddToStateActionType.ADD_TO_WISHLIST;

    constructor(public payload: WishListItem){}
}

export type UserAction = AddWelcomeNameAction | AddToWishList ;