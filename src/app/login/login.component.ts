import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {username:'',password:'',remember:false};

  /*name = (event:any):any =>{

  }*/

  public onSubmit(){
    console.log("User",this.user);
  }

  constructor() { }



  ngOnInit(): void {
  }

}
