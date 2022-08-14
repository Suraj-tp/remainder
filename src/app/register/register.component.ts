import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RemainderdataService } from 'src/services/remainderdata.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  aim = "Our Instinct is the Most Reliable Reminder"

  //form group
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    pswd: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    uid: ['',[Validators.required, Validators.pattern('[0-9]*')]]
  })

  constructor(private route: Router, private ds: RemainderdataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login() {
    this.route.navigateByUrl('login')
  }

  register() {

    var uname = this.registerForm.value.uname
    var uid = this.registerForm.value.uid
    var pswd = this.registerForm.value.pswd
    if (this.registerForm.valid) {

      const result = this.ds.register(uname, uid, pswd)

      if (result) {
        alert("Successfully Registered")
        this.route.navigateByUrl('login')
      }
      else {
        alert("Already existing customer....Please log in")
      }
    }
    else {
      alert("invalid form")
    }

  }

}
