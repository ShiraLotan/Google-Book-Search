import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state/app.state';
import * as Actions from '../../action/action';
import {Router} from '@angular/router';
import { UserName } from 'src/model/name.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userName = ' ';

  profileForm = new FormGroup({
    userName: new FormControl(''),
  });
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
   this.store.dispatch(new Actions.AddWelcomeNameAction({name: this.profileForm.value}));
   this.router.navigate(['/search']);
  }

}
