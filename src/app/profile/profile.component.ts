import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GitService } from '../git-service/git.service';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User
  subscription!: Subscription
  repos!: Repo

  constructor(private gitService: GitService) {
    
   }

  

  /*getMyRepos(){
    return this.http.get(`https://api.github.com/sharonkorir/repos&access_token=%${environment.accessToken}&limit=6`)
  }*/

  ngOnInit(){
    this.gitService.getMyProfile();
    this.subscription = this.gitService.getMyProfile()
      .subscribe((response:any)=>{
        console.log("testing again", response)
        this.user = response;
        console.log("testing date", this.user.avatar_url)
      })

    this.gitService.getMyRepos();
      console.log("testing repo", this.repos.name)
  }

}

