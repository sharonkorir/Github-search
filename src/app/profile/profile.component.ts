
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GitService } from '../git-service/git.service';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users!:User;
  repos:any[] = [];
  subscription!: Subscription

  constructor(private gitService: GitService, private http: HttpClient) { }
 

  ngOnInit(){
    this.gitService.getMyProfile();
    this.subscription = this.gitService.displayUser()

    this.gitService.getMyRepos();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

