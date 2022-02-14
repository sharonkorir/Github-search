import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { Repo } from '../repo-class/repo';
import { GitService } from '../git-service/git.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  subscription!: Subscription

 
  constructor(private gitService: GitService) { }

  ngOnInit(): void { }

  searchUser(userName: string){
    if (userName !== ""){
      this.gitService.findUser(userName);
      console.log("testing search", userName)
    }
  }

}
