import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TypeComponent } from './type/type.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:':name',component:MoviesComponent,children:[
    {path:'page/:num',component:MoviesComponent}
  ]},
  {path:':name/detail/:id',component:MovieDetailComponent},
  {path:'type/:type',component:TypeComponent,children:[
    {path:':name',component:TypeComponent,children:[
      {path:'page/:num',component:TypeComponent}
    ]}

  ]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
