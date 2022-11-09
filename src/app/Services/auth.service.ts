import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


// This service provides methods to access public and protected resources
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseApiUrl: string = environment.baseApiUrl; 

  constructor(private http: HttpClient) { }

  getPublicContent():Observable<any>{
    return this.http.get(this.baseApiUrl + 'all',{responseType: 'text'});
  }

  getUserBoard(){
    return this.http.get(this.baseApiUrl + 'user', {responseType: 'text'});
  }

  getAdminBoard(){
    return this.http.get(this.baseApiUrl + 'admin', {responseType: 'text'});
  }

  getModeratorBoard(){
    return this.http.get(this.baseApiUrl + 'moderator', {responseType: 'text'});
  }
}
