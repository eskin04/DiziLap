import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allList } from '../allList';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userList } from '../users/userList';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  none:boolean=true;
  allList=new allList().allList
  get5!:any[];
  showModal!: boolean;
  registerForm!: FormGroup;
  submitted = false;
  userList=new userList().userList;
  isUser:any;
  constructor(private router:Router,private formBuilder: FormBuilder) {

  }




  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}

getSubmit(email:string,password:string,Sign:any){
  this.isUser=this.userList.find(i=>i.email==email&&i.password==password)
  if(this.isUser!==undefined){
    this.hide()
    Sign.textContent=this.isUser.username
  }else{
    this.show()
  }
}

show()
{
  this.showModal = true; // Show-Hide Modal Check

}
//Bootstrap Modal Close event
hide()
{
  this.showModal = false;
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.showModal = false;
    }}


  capitalize(word:string){
    let wordList=word.split(' ').map(i=>{
      i=i.toLowerCase()
      i=i.replace(i.charAt(0),i.charAt(0).toUpperCase())
      return i
    }).join(' ')
    console.log(wordList)
    return wordList
  }

  reloadCategory(name:string){
    this.router.navigate([name]).then(i=>{
      location.reload()
    })
  }
  reloadType(type:string){
    this.router.navigate(['type',type,'all','page',1]).then(i=>{
      location.reload()
    } )
  }

  reload(search:HTMLInputElement,item:any){
    this.router.navigate([item.category,"detail",item.id]).then(i=>{
      location.reload()
    })
    search!.value=''
  }

  getSearch(search:HTMLInputElement){
    this.get5=this.allList.filter(i=>i.name?.includes(search.value)||i.name?.includes(this.capitalize(search.value))).slice(0,5)
  }

  toggled(statu:any){
    if(statu.classList[1]==undefined){
      this.none=true
    }else{
      this.none=false
    }


  }




}
