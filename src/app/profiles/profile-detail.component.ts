

import { Component, OnInit } from '@angular/core';
import { IProfile } from './profile';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from './profiles.service';

@Component({
  //selector: 'pm-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})

export class ProfileDetailComponent implements OnInit {
  pageTitle: string = 'Profile Detail';
  profile: IProfile;
  errorMessage: string;
 // private _id: string;
  
  constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _profileService: ProfileService) { }
    
  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `:  ${id}`;
   // this._id = this._route.snapshot.paramMap.get('id');

    this._profileService.getProfile('http://localhost:8080/api/userprofile/v1/user/' + id)
          .subscribe(profile => {
            this.profile = profile;
        },
        error => this.errorMessage = <any>error);
  }

  onBack():void {
    this._router.navigate(['/profiles']);
  }

  onEdit(profileId: string):void {
    console.log('in onEdit method');
    this._router.navigate(['/editprofile/' + profileId ]);
  }
}
