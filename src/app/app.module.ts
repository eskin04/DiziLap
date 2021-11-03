import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { MoviesComponent } from './movies/movies.component';

import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdComponent } from './ad/ad.component';
import { TypeComponent } from './type/type.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MoviesComponent,
    HomeComponent,
    NavigationComponent,
    AdComponent,
    TypeComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
