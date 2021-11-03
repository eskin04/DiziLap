import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allList } from '../allList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filmList=new allList().allList
  selectedMovies!:any[];
  selectedSeries!:any[];
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getMovies();
    this.getSeries();
  }

  reload(category:string,id:number){
    this.router.navigate(["/",category,"detail",id]).then(i=>{
      location.reload()
    })
  }

  getMovies(){
    this.selectedMovies=this.filmList.filter(i=>i.category==='movie').slice(0,7)

  }

  getSeries(){
    this.selectedSeries=this.filmList.filter(i=>i.category==='series').slice(0,7)
  }


}
