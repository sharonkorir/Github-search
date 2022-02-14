
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

  user: any = []
  subscription!: Subscription
  repos: any = []

  constructor(private gitService: GitService) {
    
   }

  

  /*getMyRepos(){
    return this.http.get(`https://api.github.com/sharonkorir/repos&access_token=%${environment.accessToken}&limit=6`)
  }*/

  ngOnInit(){
    this.gitService.getMyProfile();
    this.subscription = this.gitService.getMyProfile()
      .subscribe((response:any)=>{
        this.user = new User(response.name, response.created_at, response.avatar_url, response.followers, response.following);
        console.log("testing profile", response)
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
}

}

