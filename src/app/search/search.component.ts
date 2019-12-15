import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state/app.state';
import { MainService } from '../main.service';
import { of } from 'rxjs';
import {debounceTime, switchMap, filter} from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';
import { UserName } from 'src/model/name.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name ;
  searchForm: FormGroup;
  searchResult = [];
  booksName = [];

  constructor(private store: Store<AppState>, private searchService: MainService, private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit() {
    this.store.select(store => store.name).subscribe((data) => this.name = data.name);

    this.searchForm = this.fb.group({
      searchBar : ''
    });
    this.onChanges();
  }

  onChanges(): void {
    this.searchForm.get('searchBar').valueChanges.pipe(
      debounceTime(500),
      switchMap(  (id: string) => { 
     return id ? this.searchService.searchingValue(id) : of([]);
   })
  ).subscribe(data =>{
    this.searchResult = data.items as Array<{}>; 
    debugger
   });
  }

  openDialog(value){
    const dialogRef = this.dialog.open(BookDialogComponent, {data: value});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

