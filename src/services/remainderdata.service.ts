import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemainderdataService {

  currentuser: any
  currentUid: any

  //DATABASE:-creating database in the form of document-->wich is in the form of key(unique value) and value pairs.
  db: any = { //here key is the userid
    1000: { "userid": 1000, "username": "Chandu", "password": 1000, event: [], eventhistory: [] },
    1001: { "userid": 1001, "username": "Kapil", "password": 1001, event: [], eventhistory: [] },
    1002: { "userid": 1002, "username": "Sachin", "password": 1002, event: [], eventhistory: [] }
  }

  constructor() {
    this.getDetails()
  }

  //savedetails -to store data in local storage

  saveDetails() {
    if (this.db) {
      localStorage.setItem("database", JSON.stringify(this.db))
    }
    if (this.currentuser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentuser))
    }
    if (this.currentUid) {
      localStorage.setItem("currentUid", JSON.stringify(this.currentUid))
    }
  }

  //get details from local storage

  getDetails() {
    if (localStorage.getItem("database")) {
      this.db = JSON.parse(localStorage.getItem("database") || '')    
    }
    if (localStorage.getItem("currentUser")) {
      this.currentuser = JSON.parse(localStorage.getItem("currentUser") || '')
    }
    if (localStorage.getItem("currentUid")) {
      this.currentUid = JSON.parse(localStorage.getItem("currentUid") || '')
    }
  }


  //login function

  login(uid: any, pswd: any) {
    let db = this.db
    if (uid in db) {
      if (pswd == db[uid]["password"]) {
        this.currentuser = db[uid]["username"]
        this.currentUid = uid
        this.saveDetails()
        return true
      }
      else {
        alert("Incorrect Password")
        return false
      }
    }
    else {
      alert("User Credentials not found")
      return false
    }
  }


  //register function

  register(username: any, uid: any, password: any) {
    let db = this.db
    if (uid in db) {
      return false
    }
    else {
      //insert the data in db
      db[uid] = {
        uid,
        username,
        password,
        event: [],
        eventhistory: []
      }
      console.log(db);
      this.saveDetails()
      return true
    }
  }

  //add event

  eventadd(uid: any, password: any, event: any) {
    let db = this.db
    if (uid in db) {
      if (password == db[uid]["password"]) {

        // db[uid].event.push(event)
        db[uid].event.push({
          id: db[uid].event.length,
          name: event
        })
        
        //add event into event history
        db[uid].eventhistory.push({
          id: db[uid].event.length,
          name: event
        })

        console.log(event);
        this.saveDetails()
        return db[uid].event
      }
      else {
        alert("Incorrect Password")
        return false
      }
    }
    else {
      alert("user does not exist")
      return false
    }
  }

  // delete event

  deleteevent(uid: any, password: any, event: any) {
    let db = this.db
    if (uid in db) {
      if (password == db[uid]["password"]) {
        if (db[uid].event.name == event) {

          // db[uid].event.pop({
          //   id: db[uid].event.length,
          //   name: event
          // })
          console.log(db[uid].event.name);

          // db[uid].event=db[uid].event.name.filter((item: any)=>item!==event)

          db[uid].eventhistory.pop({
            id: db[uid].event.length,
            event: event
          })
          this.saveDetails()
          return db[uid].event
        }
        else {
          alert("Event not found")
          return false
        }

      }
      else {
        alert("Incorrect Password")
        return false
      }
    }
    else {
      alert("user does not exist")
      return false
    }
  }

  getEventHistory(uid: any) {
    return this.db[uid].eventhistory
  }

 



}
