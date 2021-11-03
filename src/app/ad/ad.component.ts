import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allList } from '../allList';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {
  gifList=['1.gif','3.gif','4.gif']
  allList=new allList().allList.slice(0,10)
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  reload(category:string,id:number){
    this.router.navigate(["/",category,"detail",id]).then(i=>{
      location.reload()
    })
  }

}
