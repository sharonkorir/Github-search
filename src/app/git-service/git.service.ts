import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';
import { ProfileComponent } from '../profile/profile.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GitService {
  user: User;
  repos: Repo;


  constructor(private http: HttpClient) { 
    this.user = new User(" ", " ", " ", " " , " ");
    this.repos = new Repo(" ", " ", " ");
  }

  getMyProfile(){
  
    let promise = new Promise((resolve,reject)=>{
      this.http.get(`https://api.github.com/users/sharonkorir`).toPromise().then((response:any)=>{
        //this.user.name = response.name;
        this.user = new User(response.name, response.created_at, response.avatar_url, response.followers, response.following)
        //testing response
        console.log("test", this.user.created_at)
      },
      error=>{

        reject(error)
      })
    })
    return this.http.get(`https://api.github.com/users/sharonkorir`)
    
  }

  getMyRepos(){
  
    let promise = new Promise((resolve,reject)=>{
      this.http.get(`https://api.github.com/users/sharonkorir/repos`).toPromise().then((response:any)=>{
        //this.user.name = response.name;
        this.repos = new Repo(response.name, response.created_at, response.description)
        //testing response
        console.log("test", this.repos)
      },
      error=>{

        reject(error)
      })
    })
    return promise
    
  }
  

}
