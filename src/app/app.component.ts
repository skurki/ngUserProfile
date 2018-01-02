import { Component } from '@angular/core';
import { ProfileService } from './profiles/profiles.service';

@Component({
  selector: 'pm-root',
  template: `
          <div>
          <nav class='navbar navbar-default'>
            <div class='container-fluid'>
              <a class='navbar-brand'><b>{{pageTitle}}</b></a>
              <ul class='nav navbar-nav'>
                <li><a [routerLink]="['/welcome']"><b>Home</b></a></li>
                <li><a [routerLink]="['/profiles']"><b>Profile List</b></a></li>
                <li><a [routerLink]="['/addprofile']"><b>Create Profile</b></a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div class='container'>
          <router-outlet></router-outlet>
        </div>
        `,
  styleUrls: ['./app.component.css'],
  providers: [ProfileService]
  
})
export class AppComponent {
  pageTitle = 'Profile Managment';
}
