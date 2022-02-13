import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  user!: User;
  repo!: Repo

  constructor(private http: HttpClient) { 

  }

  getMyProfile(){
    return this.http.get(`https://api.github.com/users/sharonkorir&access_token=%${environment.accessToken}`)
  }

   /* let promise = new Promise((resolve,reject)=>{
      this.http.get(`https://api.github.com/users?&access_token=%${environment.accessToken}`).toPromise().then((response:any)=>{
        this.user.name = response.name
        this.user.followers = response.followers
        console.log("gitsearch", response)
        resolve(response)
      },
      error=>{

        reject(error)
      })
    })
    return promise
  }*/
}
