import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';
import { ProfileComponent } from '../profile/profile.component';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GitService {
  users = new BehaviorSubject<any>([]);
  //repos!: Repo;


  constructor(private http: HttpClient) { 
    //this.user = new User(" ", " ", " ", " " , " ");
    //this.repos = new Repo(" ", " ", " ");
  }

  /*getMyProfile(){
  
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
    
  }*/

  // use subscribe
  getMyProfile(){
    
    let token = environment.accessToken
    return this.http.get(`https://api.github.com/users/sharonkorir`)
  }

  getMyRepos(){
    return this.http.get(`https://api.github.com/users/sharonkorir/repos?page=1&per_page=10`)
  }

  //pagination
  //https://api.github.com/user/repos?page=2&per_page=100
  //"Authorization: token d64761df071c2bf517ceb063b279432ed2f89c62" https://api.github.com/notifications

  //use promise
  findUser(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}`)
      .subscribe((response:any)=>{
        this.users.next(response.data)
        console.log(userName, response)
      })
  }
  
  /*findUser(userName: string) {
    let promise = new Promise((resolve,reject)=>{
      this.http.get(`access_key=${environment.accessToken}https://api.github.com/users/search?q=${userName}`).toPromise().then((response:any)=>{
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
  }*/
}
