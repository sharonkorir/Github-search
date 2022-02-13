
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
    this.gitService.getMyRepos();
    this.subscription = this.gitService.getMyProfile()
      .subscribe((response:any)=>{
        this.user = response;
        this.repos = this.gitService.repos
        console.log("testing date", this.user.avatar_url)
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
}

}

