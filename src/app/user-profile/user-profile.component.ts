import { Component, OnInit } from '@angular/core';
import { GitService } from '../git-service/git.service';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user!: User
  userName!: string
  repos: any = []



  constructor(private gitService: GitService, private http: HttpClient, private route: ActivatedRoute) { }

  searchUser(){
      this.gitService.findUser(); 
      this.gitService.findUserRepos();
      this.repos = this.gitService.reposi
      this.user = this.gitService.user
      console.log("testing user search", this.userName )
    
  }



  ngOnInit(): void{
    /*remove subscription, subscribe in service
    this.gitService.findUser(this.newUser);
    console.log("confirming user results")
    /*this.subscription = this.gitService.findUser(this.userName)
      .subscribe((response:any)=>{
        this.newUser = new User(response.name, response.created_at, response.avatar_url, response.followers, response.following, response.html_url);
        console.log("testing user", response)
      })
    this.gitService.findUserRepos(this.newRepos);
    this.subscription = this.gitService.findUserRepos(this.repoName)
      .subscribe((response:any)=>{
        this.newRepos = response;
        console.log("testing repos", response)
      })*/
  }
}




  


  


