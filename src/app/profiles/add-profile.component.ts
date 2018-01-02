
import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";
import { IProfile } from "./profile";
import { ProfileService } from "./profiles.service";


@Component({
    //selector: 'pm-add-profile',
    templateUrl: './add-profile.component.html'
})

export class AddProfileComponent implements OnInit {
    
    pageTitle: string = 'Create Profile';
    profile: IProfile;
    errorMessage: string;

    private svcUrl: string= 'http://localhost:8080/api/v1/userprofile/user';

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _profileService: ProfileService){ }

    ngOnInit(): void {
        this.profile = {
            "id": 0,
            "firstName": "",
            "lastName": "",
            "emailId": "",
            "county": "",
            "state": "",
            "country":""
        }
       // throw new Error("Method not implemented.");
    }

    onAdd(profile: IProfile) {
        console.log('onAdd method');

        this._profileService.saveProfile(this.svcUrl, this.profile)
        .subscribe(profile => {
            this.profile = profile;
        },
        error => this.errorMessage = <any>error);
        this._router.navigate(['/profiles']);
    }

    onBack(): void{
        this._router.navigate(['/profiles']);
    }
}