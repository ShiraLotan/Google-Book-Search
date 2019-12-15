import { UserName, WishListItem } from 'src/model/name.model';

export interface AppState {
    readonly name: UserName;
    readonly wishlist: Array<WishListItem> ;
  }