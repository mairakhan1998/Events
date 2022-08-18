import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { feedback, ContactType } from '../shared/feedback';
import { ReactiveFormsModule , FormControl, FormsModule} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public feedbackForm:FormGroup | undefined;
  public feedbacks:feedback | undefined;
  public contactType=ContactType;

  @ViewChild('fform') feedbackFormDirective:any;

  constructor(private fb:FormBuilder) { 
    this.createForm();
  }

 public createForm(){
   this.feedbackForm = this.fb.group({
     firstname:["",Validators.required, Validators.minLength(3)],
     lastname:["",Validators.required],
     telnum:0,
     email:'',
     agree:false,
     contactType:'None',
     message:''
   });
 }
 public firstname:string="";
 public lastname:string="";
 public telNum:string="";

  ngOnInit(): void {
  }

  public errorList:any = {
    isFirstnameValid:true,
    isLastnameValid:true,
    isTelnumValid:true}

  /*firstname_focusout = (event:any):any => {
    var result = this.firstname.match(/([a-zA-Z]+)/);
    if(result!=null)
    {
      if(this.firstname.length==result[0].length){
        this.errorList.isFirstnameValid=true;}
      else
        {this.errorList.isFirstnameValid=false;}
    }
    else
    {
        this.errorList.isFirstnameValid=false;
    }
  }*/

  firstname_focusout = (event:any):any => {
    var result = this.firstname.match(/([a-zA-Z]+)/);
    if(result!=null)
    {
      if(result[0]==this.firstname)
        this.errorList.isFirstnameValid=true;
      else
        this.errorList.isFirstnameValid=false;
    }
    else
    {
        this.errorList.isFirstnameValid=false;
    }
  }

  

  lastname_focusout = (event:any):any => {
    var result = this.lastname.match(/([a-zA-Z]+)/);
    if(result!=null)
    {
      if(this.firstname==result[0])
        this.errorList.isLastnameValid=true;
      else
        this.errorList.isLastnameValid=false;
    }
    else
    {
        this.errorList.isLastnameValid=false;
    }    
  }

  telNum_focusout = (event:any):any =>{
    var result = this.telNum.match(/^[0-9]+$/);
    if(result!=null)
    {
      if(this.telNum==result[0])
        this.errorList.isTelnumValid=true;
      else
        this.errorList.isTelnumValid=false;}
    else{
      this.errorList.isTelnumValid=false;
      }
    
  }
  public message:string | undefined;

  public onSubmit(){
    console.log(this.feedbackForm);
    this.feedbackForm?.reset();

}
}
