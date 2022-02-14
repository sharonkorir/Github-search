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
  users!: User
  repos!: Repo[]
  repository!: Repo[];
  //repository = new BehaviorSubject<any>([]);
  
  constructor(private http: HttpClient) { 
    this.users = new User(" ", " ", " ", " " , " ", " ");
    this.repository = []
  }

  // use subscribe
  getMyProfile(){
    
    return this.http.get(`https://api.github.com/users/sharonkorir`)
    .subscribe((response:any)=>{
      this.users = response.data;
      console.log("test my profile", response.name)
    })
  }

  getMyRepos(){

    return this.http.get(`https://api.github.com/users/sharonkorir/repos?page=1&per_page=10`)
    .subscribe((response:any)=>{
      this.repos=response.data;
      console.log("test my repos", response)
    })
  }

  findUser(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}`)
      .subscribe((response:any)=>{
        this.users = response.data
      })
  }

  findUserRepos(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}/repos`)
      .subscribe((response:any)=>{
        this.repos=response.data
      })
  }

  
  findRepo(repoName: string): Observable<Repo[]>{
  
    return this.http.get<Repo[]>(`https://api.github.com/search/repositories?q=${repoName}/in:name`)
  }

  displayUser(){
  
  }

  displayRepos(){
    
  }

}
