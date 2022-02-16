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
  reposi!: Repo
  repoData: any =[]
  repoName!: string
  user!: User

 
  
  constructor(private http: HttpClient) { 
    this.user= new User("","","","","","");
    this.reposi=  new Repo("","","","","");
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
      this.user = response;
      console.log("test searchuser", this.user)
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
        this.reposi = response;
        console.log("test user repo search", this.reposi)
        resolve(response)
      },
      error=>{
        reject(error);
      })
    })
    return promise;
      
}


  /*findRepo(repoName: string) {
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
    
  }*/

  findRepo() {
    let promise = new Promise((resolve,reject)=>{
      this.http.get(`https://api.github.com/search/repositories?q=${this.repoName}/in:name`).toPromise().then((res:any)=>{
        for ( let repos of res.items){
          this.reposi.name = repos.name
          this.reposi.description = repos.description;
          this.reposi.html_url = repos.html_url;
          this.reposi.created_at = repos.created_at;
          this.repoData.push(this.reposi)
          this.reposi = new Repo(" ", " ", " ", " ", " ")
          console.log("test searchrepo", repos)
          resolve(res);
        }
      },
      error=>{
        reject(error);
      })
    })
    return promise;
    
  }

  updateRepoName(repoName:string) {
    this.repoName = repoName;
}
  

}
