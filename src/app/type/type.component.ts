import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { allList } from '../allList';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {
  allList=new allList().allList;
  selectedType!:any[];

  sayi!:number;
  active:boolean=false;
  h2!:string;
  name!:string;
  maxNumber!:number;
  newSayi!:number;
  category:string='all';
  noneName:string='Film';
  allType!:any[];
  change:boolean=true;
  constructor(private route:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {

    this.getTen(1)
    this.sayi=1;

  }


  scrollTop(){
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  changeCategory(type:string){
   this.category=type
   this.router.navigate(['/','type',this.name,this.category,'page',1])
   console.log(this.category)
   this.getTen(1)
   if(this.category==='movie'){
     this.noneName='Film'
   }else if(this.category==='series'){
     this.noneName='Dizi'
   }
  }

  getTen(num:number){

    let list;
    this.route.paramMap.subscribe(param=>{
      this.name=param.get('type')!
      this.h2=param.get('type')!.toUpperCase()
      if(this.category=='all'){
        this.selectedType=this.allList.filter(i=>(i.type===this.name )).slice((num-1)*10,(num*10));
        list=this.allList.filter(i=>(i.type===this.name));
        this.change=true


       }else{

        this.selectedType=this.allList.filter(i=>(i.type===this.name )&& (i.category===this.category)).slice((num-1)*10,(num*10))
        list=this.allList.filter(i=>(i.type===this.name) &&( i.category===this.category))
        this.change=false

       }

      console.log(this.selectedType)

      this.router.navigate(['type',this.name,this.category,'page',num])
      this.sayi=num


      if(this.sayi*10>=list.length){
        this.active=true
      }else{
        this.active=false
      }
      this.maxNumber=Math.ceil((list.length/10))
      if(this.sayi>3&&this.maxNumber>this.sayi+2){
        this.newSayi=this.sayi
      }else if((this.maxNumber==this.sayi+2||this.maxNumber==this.sayi+1 || this.maxNumber==this.sayi)&& this.maxNumber>4){
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
