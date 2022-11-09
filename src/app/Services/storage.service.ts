import { Injectable } from '@angular/core';

// StorageService manages user information (username, email, roles) inside Browser’s Session Storage. For Logout, we will clear this Session Storage.
  const USER_KEY = 'studentNo';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  

  constructor() { }
  // clean(){
  //   window.sessionStorage.clear();
  // }

  // public saveUser(student:any){
  //   window.sessionStorage.removeItem(USER_KEY);
  //   window.sessionStorage.setItem(USER_KEY, JSON.stringify(student));
  // }

  //function for getting a single user detaills.

  public getStudent(): any {
    const student = localStorage.getItem(USER_KEY);
    console.log(USER_KEY)
    if (student) {
      return JSON.parse(student);
    }

    return {};
  }

  
}
