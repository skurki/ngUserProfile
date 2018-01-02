
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileListComponent } from './profiles/profile-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileDetailComponent } from './profiles/profile-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { EditProfileComponent } from './profiles/edit-profile.component';
import { AddProfileComponent } from './profiles/add-profile.component';


@NgModule({
  declarations: [
    AppComponent, WelcomeComponent, ProfileListComponent, ProfileDetailComponent, 
    EditProfileComponent, AddProfileComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, 
      RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent },
        { path: 'profiles', component: ProfileListComponent },
        { path: 'profile/:id', component: ProfileDetailComponent },
        { path: 'editprofile/:id', component: EditProfileComponent },
        { path: 'addprofile', component: AddProfileComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
