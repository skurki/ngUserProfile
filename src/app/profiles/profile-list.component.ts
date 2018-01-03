
import { Component } from '@angular/core';
import { IProfile } from './profile';
import { ProfileService } from './profiles.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';

@Component({
   // selector: 'pm-profiles',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.css']
})

export class ProfileListComponent implements OnInit {

    private svcUrl: string= 'http://localhost:8080/api/userprofile/v1/user';
    pageTitle: string = 'Profile List';
    _listFilter: string;
    errorMessage: string;
    showEmail: boolean = false;

    constructor (private _profileService: ProfileService,
            private _router: Router) {
       // this.listFilter = 'Jack';
    }

    get listFilter(): string {
        return this._listFilter; 
    }

    set listFilter(value: string) {
        this._listFilter = value;
        //console.log('entered');
        this.filteredProfiles = this.listFilter ? this.performFilter(this.listFilter) : this.profiles;
    }

    filteredProfiles: IProfile[];

    profiles: IProfile[] = [];


    performFilter(filterBy: string) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.profiles.filter(
            (profile: IProfile) => profile.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        this._profileService.getProfiles(this.svcUrl)
            .subscribe(profiles => {
                    this.profiles = profiles;
                    this.filteredProfiles = this.profiles;
                },
                error => this.errorMessage = <any>error);
        
    }

    onDelete(profileId: string): void {
        console.log('in onDelete method');
        this._profileService.deleteProfile(this.svcUrl + '/' + profileId)
            .subscribe(profile => {
             // this.profile = profile;
          },
          error => this.errorMessage = <any>error);
  
        //   this._profileService.getProfile(this.svcUrl)
        //     .subscribe(profile => {
        //      // this.profile = profile;
        //   },
        //   error => this.errorMessage = <any>error);

        this.ngOnInit();
          //this._router.navigate(['/profiles']);
    }

    toggleEmail(): void {
        console.log('in toggleEmail');
        console.log(this.showEmail);
        this.showEmail = !this.showEmail;
    }
 
}