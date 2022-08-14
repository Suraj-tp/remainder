import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RemainderdataService } from 'src/services/remainderdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//PROPERTIES

//string interpolation
aim="Our Instinct is the Most Reliable Reminder"

//property binding
userid="User ID Please"

//to access all the functions of the class we declare the variables
// uid=""
// pswd=""

//form group
loginForm=this.fb.group({
  uid:['',[Validators.required, Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
})


//Dependency Injection
  constructor(private route:Router ,private ds:RemainderdataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

//USER DEFINED FUNCTIONS 
// useridChange(event:any){
// this.uid=event.target.value
// console.log(this.uid);//to access the class variables we use this keyword,this-->means call by reference
// }                     //A memory will be alotted when we declare variables.That memory has a address,we call that address by using this keyword not the stored data.
                 
// passwordChange(pswd:4any){
// this.pswd=pswd.target.value
// console.log(this.pswd);

// }

//Two way binding
login(){
  var uid=this.loginForm.value.uid
  var pswd=this.loginForm.value.pswd
 
  if(this.loginForm.valid){
    const result=this.ds.login(uid,pswd)

    if(result){
      alert("Login Successful")
      this.route.navigateByUrl('home')
      }
  }
  else{
    alert("Invalid Form")
  }
  
}

//Template referencing variable
// login(uid:any,pswd:any){
//   var uid=uid.value
//   var pswd=pswd.value
//   console.log(uid);
    
//   let db=this.db
//   if(uid in db){
//     if(pswd==db[uid]["password"]){
//       alert("Login Successful")
//     }
//     else{
//       alert("Incorrect Password")
//     }
//   }
//   else{
//     alert("User Credentials not found")
//   }
// }

register() {
  this.route.navigateByUrl('register')
}


}
