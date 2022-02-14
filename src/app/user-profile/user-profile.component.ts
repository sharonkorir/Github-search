import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GitService } from '../git-service/git.service';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users:any[] = [];
  repos:any[] = [];
  subscription!: Subscription

  constructor(private gitService: GitService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.gitService.getMyRepos();
    this.gitService.displayRepos();

    this.gitService.getMyProfile();
    this.gitService.displayUser();
  }

}


