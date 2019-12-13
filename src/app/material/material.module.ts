import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

const materialComponent = [MatMenuModule, MatToolbarModule, MatInputModule, MatButtonModule, MatAutocompleteModule ]

@NgModule({
  imports: [materialComponent],
  exports: [materialComponent]
})
export class MaterialModule { }
