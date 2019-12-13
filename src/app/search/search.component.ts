import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state/app.state';
import { Observable } from 'rxjs/Observable';
import { UserName } from '../../model/name.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  username: Observable<UserName[]>;
  searchTerm: string;
  searchResult: [];
  isLoading = false;
  errorMsg: string;

  constructor(private store: Store<AppState>, private searchService: MainService, private formBuilder: FormBuilder) {
    this.username = store.select('username');
   }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchBar: ''
    });
    this.onChanges();
  }

  onChanges(): void {
    this.searchForm.get('searchBar').valueChanges.subscribe(val => {
      this.searchService.searchingValue(val).subscribe(function(data){
        this.searchResult = data.items;
      } );

    });

  }
 
  }


