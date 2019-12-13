import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { UserName } from 'src/model/name.model';

export const USERNAME = '[USERNAME] add';


export class AddName implements Action {
    readonly type = USERNAME;

    constructor(public payload: UserName) {}
}

export type Actions = AddName;
