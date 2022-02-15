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
  repository = new Repo ("", "", "")
  
  constructor(private http: HttpClient) { 
    //this.user = new User(" ", " ", " ", " " , " ", " ");
    //this.repository = []
  }

  // use subscribe
  getMyProfile(){
    
    return this.http.get(`https://api.github.com/users/sharonkorir`)
    
  }

  getMyRepos(){

    return this.http.get(`https://api.github.com/users/sharonkorir/repos?page=1&per_page=10`)

  }

  findUser(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}`)
  
  }

  findUserRepos(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}/repos`)
    
}

  
  //use promise
  findRepo(repoName: string) {
    let promise = new Promise((resolve,reject)=>{
        this.http.get(`https://api.github.com/search/repositories?q=${repoName}/in:name`).toPromise().then((response:any)=>{
        this.repository = response;
        console.log("test searchrepo", this.repos)
        resolve(response);
        
      },
      error=>{
        reject(error);
      })
    })
    return promise;
  }

  displayRepos(repoName: string){
 
    
  }

}
