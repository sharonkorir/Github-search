import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GitService } from '../git-service/git.service';
import { Repo } from '../repo-class/repo';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {

  repos: any = [];
  subscription!: Subscription;
  repoName!: string;
  displayRepo = new Repo(" ", " ", " ", " ")
  constructor(public gitService: GitService, private route: ActivatedRoute) { 

  }

  searchRepo(repoName: string){
    if (repoName !== ""){
      this.gitService.findRepo(repoName);
      this.repos = this.gitService.repository
      console.log("testing repo", repoName);
  
    }

  }

  ngOnInit() {
    //use param to fetch results data
    this.route.queryParams.subscribe((params: any) => {
      this.repoName = params.data;
      this.gitService.findRepo(this.repoName);
      this.displayRepo = this.gitService.repository
      this.gitService.findRepo(this.repoName)
  
    })

  }
}
