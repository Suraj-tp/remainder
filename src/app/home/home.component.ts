import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RemainderdataService } from 'src/services/remainderdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  aim = "Our Instinct is the Most Reliable Reminder"

  user: any
  ldate:any

  //form group
  addEvent = this.fb.group({
    uid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    addevent: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
  })

  deleteEvent = this.fb.group({
    uid1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    deleteevent: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
  })

  constructor(private ds: RemainderdataService, private fb: FormBuilder,private route:Router) {
    this.user = this.ds.currentuser
    this.ldate=new Date
  }

  //after constructor ngOnInit will call 
  ngOnInit(): void {
    if(!localStorage.getItem("currentUser")){
      alert("Please Log in")
      this.route.navigateByUrl('')
    }
  }


  eventadd() {
    var uid = this.addEvent.value.uid
    var pswd = this.addEvent.value.pswd
    var addevent = this.addEvent.value.addevent

    if (this.addEvent.valid) {
      const result = this.ds.eventadd(uid, pswd, addevent)
      if (result) {
        alert(addevent + "added successfully" + result)
      }
    }
    else {
      alert("Invalid Form")
    }

  }

  eventdelete() {
    var uid1 = this.deleteEvent.value.uid1
    var pswd1 = this.deleteEvent.value.pswd1
    var deleteevent = this.deleteEvent.value.deleteevent

    if (this.deleteEvent.valid) {
      const result = this.ds.deleteevent(uid1, pswd1, deleteevent)
      if (result) {
        alert(deleteevent + "deleted successfully" + result)
      }
    }
    else {
      alert("Invalid Form")
    }

  }

  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentUid")
    this.route.navigateByUrl('')
  }
}
