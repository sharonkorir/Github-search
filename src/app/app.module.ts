import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { SearchRepoComponent } from './search-repo/search-repo.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LastUpdatePipe } from './last-update.pipe';
import { DarkmodeDirective } from './darkmode.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    SearchRepoComponent,
    UserProfileComponent,
    LastUpdatePipe,
    DarkmodeDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
