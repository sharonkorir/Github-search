import { Component, OnInit } from '@angular/core';
import { GitService } from '../git-service/git.service';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LastUpdatePipe } from '../last-update.pipe';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  newUser: any =[]
  subscription!: Subscription
  newRepos: any = []
  


  constructor(private gitService: GitService, private http: HttpClient, private route: ActivatedRoute) { }

  searchUser(userName: string){
    if (userName !== ""){
      this.gitService.findUser(userName); 


      this.gitService.findUserRepos(userName);
    
      console.log("testing search", )
    }
  }



  ngOnInit(){
    //remove subscription, subscribe in service
    this.gitService.findUser(this.newUser);
    console.log("confirming user results")
    /*this.subscription = this.gitService.findUser(this.userName)
      .subscribe((response:any)=>{
        this.user = new User(response.name, response.created_at, response.avatar_url, response.followers, response.following, response.html_url);
        console.log("testing user", response)
      })*/
    this.gitService.findUserRepos(this.newRepos);
    /*this.subscription = this.gitService.findUserRepos(this.repoName)
      .subscribe((response:any)=>{
        this.repos = response;
        console.log("testing repos", response)
      })*/
  }

  ngOnDestroy(): void {
    /*this.subscription.unsubscribe();*/
  }

}




  


  


