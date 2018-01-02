
import  { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IProfile } from './profile';
import { HttpResponse } from '@angular/common/http/src/response';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpHeaders } from '@angular/common/http';
import { Http, RequestOptions } from '@angular/http';


@Injectable()
export class ProfileService {

    //private _profileUrl = 'http://localhost:8080/api/v1/userprofile/user';
    //private _profileUrl = './api/profiles/profiles.json';

    constructor(private _http: HttpClient){
    }


    getProfiles(profileUrl: string): Observable<IProfile[]> {
        //let head: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get<IProfile[]>(profileUrl, 
            { headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}) 
            } )
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProfile(profileUrl: string): Observable<IProfile> {
        //let head: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get<IProfile>(profileUrl, 
            { headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}) 
            } )
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    updateProfile(profileUrl: string, profile: IProfile): Observable<IProfile> {
        //let head: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put<IProfile>(profileUrl, JSON.stringify(profile),
            { headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}) 
            } )
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    saveProfile(profileUrl: string, profile: IProfile): Observable<IProfile> {
        //let head: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post<IProfile>(profileUrl, JSON.stringify(profile),
            { headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}) 
            } )
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteProfile(profileUrl: string): Observable<IProfile> {
        //let head: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete<IProfile>(profileUrl, 
            { headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}) 
            } )
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}