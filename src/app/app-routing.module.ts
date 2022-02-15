import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: '', redirectTo:"/home", pathMatch:"full"},
  {path: 'home', component: LandingComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'repos', component: SearchRepoComponent},
  {path: 'repos/:response', component: SearchRepoComponent},
  {path: 'user', component: UserProfileComponent},
  {path: 'user/response', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
