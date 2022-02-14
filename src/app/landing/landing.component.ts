import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { Repo } from '../repo-class/repo';
import { GitService } from '../git-service/git.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


  constructor(private gitService: GitService) { }

  repos!: any[];
  user!: User;

  ngOnInit(): void {
  }

  searchUser(userName: string){
    if (userName !== ""){
      this.gitService.findUser(userName);
        
      this.gitService.findUserRepos(userName);
        
      console.log("testing search", userName)
    }
  }
  //search general repos
  searchRepo(repoName: string){
    if (repoName !== ""){
      this.gitService.findRepo(repoName);
      console.log("testing repo", repoName);
    }

  }

}
