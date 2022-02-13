import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { Repo } from '../repo-class/repo';
import { GitService } from '../git-service/git.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private gitService: GitService) { }

  ngOnInit(): void {
  }


}
