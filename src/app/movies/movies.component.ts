import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { allList } from '../allList';
import { film } from '../film';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  allList=new allList().allList;
  movieList!:film[];
  sayi!:number;
  active:boolean=false;
  h2!:string;
  name!:string;
  maxNumber!:number;
  newSayi!:number;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.getTen(1)


    this.sayi=1;
  }

  scrollTop(){
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  getTen(num:number){

    let list;
    this.route.paramMap.subscribe(param=>{
      this.name=param.get('name')!
      this.h2=param.get('name')!
      if(this.h2=='movie'){
        this.h2='Filmler'
      }else if(this.h2=='series'){
        this.h2='Diziler'
      }
      this.movieList=this.allList.filter(i=>i.category===this.name).slice((num-1)*10,(num*10))
      this.router.navigate([this.name,'page',num])
      this.sayi=num
      list=this.allList.filter(i=>i.category===this.name)
      if(this.sayi*10>=list.length){
        this.active=true
      }else{
        this.active=false
      }

      if(this.allList.filter(i=>i.category===this.name).length>3){
        this.maxNumber=Math.ceil((this.allList.filter(i=>i.category===this.name).length/10))

      }
      if(this.sayi>3&&this.maxNumber>this.sayi+2){
        this.newSayi=this.sayi
      }else if((this.maxNumber==this.sayi+2||this.maxNumber==this.sayi+1 || this.maxNumber==this.sayi)&&this.maxNumber>4){
        this.newSayi=this.maxNumber-2
      }else{
        this.newSayi=3
      }

    })

  }

  activeButton(num:number){
    return {
      'active': this.sayi==num
    }
  }

  nextNum(){

     this.getTen(this.sayi+1)
  }

  prevNum(){
   this.getTen(this.sayi-1)
    }




  }



