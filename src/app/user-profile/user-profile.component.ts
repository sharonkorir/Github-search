import { Component, OnInit } from '@angular/core';
import { GitService } from '../git-service/git.service';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users!: User
  username!: string
  repos: any = []
  subscription!: Subscription



  constructor(private gitService: GitService) { }

  searchUser(){
    this.gitService.updateUserName(this.username)
    this.gitService.findUser(); 
    this.gitService.findUserRepos();
    this.repos = this.gitService.reposi
    this.users = this.gitService.user
    console.log("testing user search", this.username, this.users )
    
  }



  ngOnInit(): void{
    /*this.gitService.findUser();
    this.subscription = this.gitService.findUser()
      .subscribe((response:any)=>{
        this.users = response
        console.log("testing profile", response)
      })*/
  }
}




  


  


