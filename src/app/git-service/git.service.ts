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
  repo: Repo;

  constructor(private http: HttpClient) { 
    this.user = new User(" ", " ", " ", " " , " ");
    this.repo = new Repo(" ", " ");
  }

  getMyProfile(){
  
    let promise = new Promise((resolve,reject)=>{
      this.http.get(`https://api.github.com/users/sharonkorir`).toPromise().then((response:any)=>{
        //this.user.name = response.name;
        this.user = new User(response.name, response.created_at, response.avatar_url, response.followers, response.following)
        //testing response
        console.log("test",response, this.user.name)
      },
      error=>{

        reject(error)
      })
    })
    return promise
    
  }

  /*getMyRepos(){
    let promise = new Promise((resolve,reject)=>{
      this.http.get<User[]>(`https://api.github.com/users/sharonkorir/repos`).toPromise().then((response:any)=>{
  
        console.log("test",response)
      },
      error=>{

        reject(error)
      })
    })
    return promise
    
  }*/

}
