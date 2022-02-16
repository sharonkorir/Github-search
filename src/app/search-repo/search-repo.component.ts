import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GitService } from '../git-service/git.service';
import { Repo } from '../repo-class/repo';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {

  //repos: Repo[] = [];
  repos: any = []
  repoName!: string

  constructor(public gitService: GitService) { 

  }

  searchRepo(){

      this.gitService.updateRepoName(this.repoName)
      this.gitService.findRepo();
      this.repos = this.gitService.repoData
      console.log("testing repo search", this.repoName)

  }

  ngOnInit(): void {
  /*  this.gitService.findRepo(this.repoName).subscribe((response:any)=>{
      this.repos = response;
      this.repoData = this.repos.list
      console.log(this.repos)
    })*/

    
  }
}
