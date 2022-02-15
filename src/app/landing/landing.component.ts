import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { Repo } from '../repo-class/repo';
import { GitService } from '../git-service/git.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


  constructor(private gitService: GitService, private route: ActivatedRoute) { }

  repos:any[] = [];
  user: any[] = [];
  displayUser = new User(" ", " ", " ", " ", " ", " ")
  userName!: string

  searchUser(userName: string){
    if (userName !== ""){
      this.gitService.findUser(userName); 
      this.gitService.findUserRepos(userName);
      this.displayUser = this.gitService.userResult
      console.log("testing search", userName)
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.userName = params.data;
      this.gitService.findUser(this.userName);
      this.displayUser = this.gitService.userResult
      this.gitService.findUserRepos(this.userName)
    })
  }


}
