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
  newUser = new BehaviorSubject<any>([]);
  newRepos = new BehaviorSubject<any>([]);
  repoSearch = new BehaviorSubject<any>([]);
 
  
  constructor(private http: HttpClient) { 
  }

  // use subscribe
  getMyProfile(){
    
    return this.http.get(`https://api.github.com/users/sharonkorir`)
    
  }

  getMyRepos(){

    return this.http.get(`https://api.github.com/users/sharonkorir/repos?page=1&per_page=10`)

  }

  findUser(userName: string){
    let promise = new Promise((resolve,reject)=>{
      this.http.get(`https://api.github.com/users/${userName}`).toPromise().then((response:any)=>{
      this.newUser = response;
      console.log("test searchuser", this.newUser)
      resolve(response);
      
    },
    error=>{
      reject(error);
    })
  })
  return promise;
   /* return this.http.get(`https://api.github.com/users/${userName}`)*/
  
  }

  findUserRepos(userName: string){
    let promise = new Promise((resolve,reject)=>{
      this.http.get(`https://api.github.com/users/${userName}/repos`).toPromise().then((response: any)=>{
        this.newRepos = response;
        console.log("test user repo search", this.newRepos)
        resolve(response)
      },
      error=>{
        reject(error);
      })
    })
    return promise;
      
}


  findRepo(repoName: string) {
    let promise = new Promise((resolve,reject)=>{
        return this.http.get(`https://api.github.com/search/repositories?q=${repoName}/in:name`).toPromise().then((response:any)=>{
        this.repoSearch = response;
        console.log("test searchrepo", this.repoSearch)
        resolve(response);
        
      },
      error=>{
        reject(error);
      })
    })
    return promise;
    
  }

}
