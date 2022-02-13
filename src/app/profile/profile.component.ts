import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GitService } from '../git-service/git.service';
import { User } from '../user-class/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User

  constructor(private gitService: GitService) {
    
   }

  

  /*getMyRepos(){
    return this.http.get(`https://api.github.com/sharonkorir/repos&access_token=%${environment.accessToken}&limit=6`)
  }*/

  ngOnInit(){
    this.gitService.getMyProfile();
    this.user = this.gitService.user;
    console.log("testing data", this.user)
  }

}
