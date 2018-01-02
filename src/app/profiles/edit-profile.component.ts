

import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { IProfile } from "./profile";
import { ProfileService } from "./profiles.service";
import { Profile } from "selenium-webdriver/firefox";



@Component ({
    //selector: 'pm-edit-profile',
    templateUrl: './edit-profile.component.html'
})

export class EditProfileComponent implements OnInit{

    pageTitle: String = 'Profile Details - Update';
    errorMessage: string;
    profile: IProfile;
    
    private svcUrl: string= 'http://localhost:8080/api/userprofile/v1/user';

    constructor(private _route: ActivatedRoute,
        private _profileService: ProfileService,
        private _router: Router){}
    
    ngOnInit(): void {

        let id = this._route.snapshot.paramMap.get('id');
        this.pageTitle += `:  ${id}`;
        this._profileService.getProfile( this.svcUrl + '/' + `${id}`)
            .subscribe(profile => { 
                this.profile = profile;
            },
            error => this.errorMessage = <any>error);
        //throw new Error("Method not implemented.");
    }

    onBack():void {
        this._router.navigate(['/profiles']);
      }

      onUpdate():void {
          console.log('On Update');
          console.log(this.profile.firstName);
          this._profileService.updateProfile(this.svcUrl + '/' + this.profile.id, this.profile)
            .subscribe(profile => {
                this.profile = profile;
            },
            error => this.errorMessage = <any>error);
            this._router.navigate(['/profiles']);
      }
}