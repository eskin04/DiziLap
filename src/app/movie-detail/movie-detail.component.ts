import { Component, OnInit } from '@angular/core';
import { allList } from '../allList';
import { film } from '../film';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CommentList } from '../commentList';
import { Comment } from '../comment';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  allList=new allList().allList;
  commentList=new CommentList().commentList
  selectedMovie!:film;
  actors!:any[];
  selectedComments!:Comment[];
  height='0';
  mainHeight='100px';
  iClass:boolean=true;
  constructor(private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.getMovieById();
    this.getCommentsById()

  }
  scrollTop(){
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  getMovieById(){

    let list:any[]=[];
    let id:number;
    this.router.paramMap.subscribe(param=>{
      id=+param.get('id')!;
    })
  this.selectedMovie=this.allList.find(i=>i.id===id)!;
  this.selectedMovie.actors!.forEach((i,index)=>{
    let comma;

    if(index==this.selectedMovie.actors!.length-1){
      comma=i
    }else{
      comma=i+','
    }
    list.push(comma)


  })
  this.actors=list

  }

  getCommentsById(){
    let id:number;
    this.router.paramMap.subscribe(param=>{
      id=+param.get('id')!;

    })
    this.selectedComments=this.commentList.filter(i=>i.id===id);
    if(!this.selectedComments.length){
    this.selectedComments.push({name:'Henüz bir yorum yapılmamış'})

    }


  }

  clickOnComments(statu:any){
    if(statu.style.height=='0px'){
      this.height='100%';
      this.mainHeight=(100+this.selectedComments.length*150)+'px';
      this.iClass=false;
    }else{
      this.height='0';
      this.mainHeight='100px';
      this.iClass=true;
    }

  }

  changeHeight(): any {

    return { 'height':this.height };
}

changeMainHeight(){
  return {'height':this.mainHeight}
}






}
