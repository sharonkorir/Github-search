
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GitService } from '../git-service/git.service';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  users: any[] = [];
  repos: any[] = [];
  subscription!: Subscription

  constructor(private gitService: GitService) { }


  ngOnInit(){
    //use subsciption to fetch landing page data
    
    this.gitService.getMyRepos();
    this.subscription = this.gitService.displayRepos();
      .subscribe((response:any)=>{
        this.repos = response;
      });

    this.gitService.getMyProfile();
    this.subscription = this.gitService.displayUser();
      .subscribe((response:any)=>{
        this.users = response
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
}

}

