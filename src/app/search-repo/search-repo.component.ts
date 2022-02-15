import { Component, OnInit } from '@angular/core';
import { GitService } from '../git-service/git.service';
import { Repo } from '../repo-class/repo';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {

  repos: Repo[] = []
  constructor(public gitService: GitService) { 

  }

  searchRepo(repoName: string){
    if (repoName !== ""){
      this.gitService.findRepo(repoName);
      console.log("testing repo", repoName);
    }

  }

  ngOnInit(): void {
  }



}
