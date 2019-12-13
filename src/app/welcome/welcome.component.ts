import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state/app.state';
import { UserName } from '../../model/name.model';
import * as Actions from '../../action/action';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userName: string;

  profileForm = new FormGroup({
    userName: new FormControl(''),
  });
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
   this.userName = this.profileForm.value;
   this.saveUsername()
  }

  saveUsername(){
    this.store.dispatch(new Actions.AddName({name: this.userName}));
    this.router.navigate(['/search']);
  }
}
