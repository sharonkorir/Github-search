import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';


@Injectable({
  providedIn: 'root'
})
export class GitService {
  reposi!: Repo
  repoData: any =[]
  repoName!: string
  user!: User
  userName!: string

 
  
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

  findUser(){
    let promise = new Promise((resolve,reject)=>{
      this.http.get(`https://api.github.com/users/${this.userName}`).toPromise().then((response:any)=>{
      this.user.name = response.name;
      this.user.followers = response.followers;
      this.user.following = response.following;
      this.user.created_at = response.created_at;
      this.user.avatar_url = response.avatar_url;
      this.user.html_url = response.html_url
      console.log("test search user", this.user.name)
      resolve(response);
      
    },
    error=>{
      reject(error);
    })
  })
  return promise;
  }
  

  findUserRepos(){
    this.repoData = []
    let promise = new Promise((resolve,reject)=>{
      this.http.get(`https://api.github.com/users/${this.userName}/repos`).toPromise().then((res: any)=>{
        for ( let repos of res.items){
          this.reposi.name = repos.name
          this.reposi.description = repos.description;
          this.reposi.html_url = repos.html_url;
          this.reposi.created_at = repos.created_at;
          this.repoData.push(this.reposi)
          this.reposi = new Repo(" ", " ", " ", " ", " ")
          console.log("test searchrepo", this.reposi)
          resolve(res);
        }

      },
      error=>{
        reject(error);
      })
    })
    return promise;
      
}




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

  updateUserName(userName:string){
    this.userName = userName
  }
  

}
