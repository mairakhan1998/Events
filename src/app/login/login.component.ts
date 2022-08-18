import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {username:'',password:'',remember:false};
  valid!:boolean;

  username = (event:any):any =>{
    if(this.user.username!='munshat'){
      this.valid=false;
    }
    else{
      this.valid=true;
    }
  }

  public onSubmit(){
    console.log("User",this.user);
    console.log(this.valid);
  }

  constructor() { }





  ngOnInit(): void {
  }

}
