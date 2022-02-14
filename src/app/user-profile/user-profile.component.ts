import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  users!: User
  repos:Repo[] = [];
  subscription!: Subscription
  userName: any
  repoName: any

  constructor(private gitService: GitService, private http: HttpClient, private route: ActivatedRoute) { }

 /* findUser(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}`)
      .subscribe((response:any)=>{
        this.users = response.data
      })
  }*/

  findUserRepos(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}/repos`)
      .subscribe((response:any)=>{
        this.repos=response.data
      })
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.userName = params.data;
      this.repoName = params.data;

      this.gitService.findUser(this.userName)
      this.users = this.gitService.users

      // this.gitUser.getRepos(this.name)
      // this.reposi = this.gitUser.repos
      /*this.gitService.findUserRepos(this.repoName)
        .subscribe((response:any) => {
         this.repos = response
      })*/
      console.log("testing user profile", this.users)
    })
  }

}
