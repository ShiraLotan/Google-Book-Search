import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../reducer/reducer';
import { IsLoadingPipe } from './is-loading.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WishlistComponent,
    WelcomeComponent,
    NavBarComponent,
    IsLoadingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      username: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
