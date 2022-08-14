import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RemainderdataService } from 'src/services/remainderdata.service';

@Component({
  selector: 'app-eventhistory',
  templateUrl: './eventhistory.component.html',
  styleUrls: ['./eventhistory.component.css']
})
export class EventhistoryComponent implements OnInit {
  aim = "Our Instinct is the Most Reliable Reminder"

  user: any
  uid=JSON.parse(localStorage.getItem("currentUid") || '')
  eventhistory:any
  ldate:any

  constructor(private ds:RemainderdataService,private route:Router) { 
    this.user = this.ds.currentuser
    this.eventhistory=this.ds.getEventHistory(this.uid)
    console.log(this.eventhistory);
    this.ldate=new Date
  }

  ngOnInit(): void {
    if(!localStorage.getItem("currentUid")){
      alert("Please Log in")
      this.route.navigateByUrl('')
      
    }
  }

  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentUid")
    this.route.navigateByUrl('')
  }
}
