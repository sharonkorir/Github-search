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
  repos = new BehaviorSubject<any>([]);
  repository = new BehaviorSubject<any>([]);
  
  constructor(private http: HttpClient) { 
    //this.user = new User(" ", " ", " ", " " , " ");
    //this.repos = new Repo(" ", " ", " ");
  }

  // use subscribe
  getMyProfile(){
    
    return this.http.get(`https://api.github.com/users/sharonkorir`)
    .subscribe((response:any)=>{
      this.users.next(response.data);
      console.log("test my profile", response.name)
    })
  }

  getMyRepos(){

    return this.http.get(`https://api.github.com/users/sharonkorir/repos?page=1&per_page=10`)
    .subscribe((response:any)=>{
      this.repos.next(response.data);
      console.log("test my repos", response)
    })
  }

  findUser(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}`)
      .subscribe((response:any)=>{
        this.users.next(response.data)
      })
  }

  findUserRepos(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}/repos`)
      .subscribe((response:any)=>{
        this.repos.next(response.data)
      })
  }

  //use promise to return repo search
  findRepo(repoName: string) {
    let promise = new Promise((resolve,reject)=>{
      this.http.get(`https://api.github.com/search/repositories?q=${repoName}/in:name`).toPromise().then((response:any)=>{
        this.repository = response;
        resolve(response);
        console.log(response);
      },
      error=>{
        reject(error);
      })
    })
    return promise;
  }

  displayUser(){
    return this.users.asObservable();
  }

  displayRepos(){
    return this.repos.asObservable();
  }

}
