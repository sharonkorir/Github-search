import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private httpClient: HttpClient) { }
}
