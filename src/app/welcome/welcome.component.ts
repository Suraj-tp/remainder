import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  aim = "Our Instinct is the Most Reliable Reminder"


  constructor(private route: Router ) { }

  ngOnInit(): void {
  }

  login() {
    this.route.navigateByUrl('login')
  }
  register() {
    this.route.navigateByUrl('register')
  }

}
