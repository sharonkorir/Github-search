import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GitService } from '../git-service/git.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private gitService: GitService, private http: HttpClient) { }

  getMyProfile(){
    return this.http.get(`https://api.github.com/users/sharonkorir&access_token=%${environment.accessToken}`)
  }

  getMyRepos(){
    return this.http.get(`https://api.github.com/sharonkorir/repos&access_token=%${environment.accessToken}&limit=6`)
  }

  ngOnInit(): void {
  }

}
