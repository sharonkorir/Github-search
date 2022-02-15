import { Component, OnInit } from '@angular/core';
import { GitService } from '../git-service/git.service';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any = []
  subscription!: Subscription
  repos: any = []
  userName!: string;
  repoName!: string;

  constructor(private gitService: GitService, private http: HttpClient, private route: ActivatedRoute) { }

  /*findUser(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}`)
      .subscribe((response:any)=>{
        this.user = response.data
      })
  }

  findUserRepos(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}/repos`)
      .subscribe((response:any)=>{
        this.repos=response.data
      })
  }*/

  ngOnInit(){
    //use subsciption to fetch landing page data
    this.gitService.findUser(this.userName);
    this.subscription = this.gitService.findUser(this.userName)
      .subscribe((response:any)=>{
        this.user = new User(response.name, response.created_at, response.avatar_url, response.followers, response.following, response.html_url);
        console.log("testing user", response)
      })
    this.gitService.findUserRepos(this.repoName);
    this.subscription = this.gitService.findUserRepos(this.repoName)
      .subscribe((response:any)=>{
        this.repos = response;
        console.log("testing repos", response)
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}




  


  


