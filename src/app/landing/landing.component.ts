import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
