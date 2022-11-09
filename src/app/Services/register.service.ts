import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Users } from '../Model/Users';
import { map, Observable } from 'rxjs';
import { Login } from '../Model/Login';
// import { map } from 'rxjs/operators';



 


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseApiUrl: string = environment.baseApiUrl;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
   

  constructor(private http: HttpClient) {
    
   }
   
   //calling api for registering students.

   addStudent(addStudentRequests:any):Observable<Users>{
    return this.http.post<Users>(this.baseApiUrl + '/api/Registration/register', addStudentRequests)
   }

   //calling api for getting aall the  registered students to the portal

   getAllStudents():Observable<Users>{
    return this.http.get<Users>(this.baseApiUrl +  '')
   }

   //calling api for getting a single student from the portal 

  getOneStudent(StudentNo:string):Observable<Users>{
    return this.http.get<Users>(this.baseApiUrl+''+ StudentNo)
  }


  //calling api for updating student from the portal

  updateStudent(updateStudentRequest:any):Observable<Users>{
    return this.http.post<Users>(this.baseApiUrl + '', updateStudentRequest)
  }

  //calling api for deleting student from the portal
  deleteStudent(id:string):Observable<Users>{
    return  this.http.delete<Users>(this.baseApiUrl  + '' + id)
  }

  //calling the api to login students after registration
  loginStudent(loginStudentRequest:any):Observable<Login>{
    return this.http.post<Login>(this.baseApiUrl + '/api/Registration/login', loginStudentRequest);
  }
 
  // method used to send a GET request to retrive the user profile
  getStudentProfile(studentNo: any): Observable<Users> {
    return this.http.get<Users>(this.baseApiUrl + '/api/Profile/singleUser/'+studentNo)
}
    
 
    // return this.http.get<Users>(this.baseApiUrl + '/api/Profile/singleUser'+ studentNo)
    // .pipe(
    //   map((users: Users)=>users)
    // )
   
  }

  
  // method for accessing the token stored in the local storage after user login
//  getAccessToken(){
//   return localStorage.getItem('access_token')
//  }

 //  returns true if user is logged in otherwise false
//  get isLoggedIn(): boolean {
//   let authToken = localStorage.getItem('access_token');
  // return (authToken !== null) ? true : false;
//   if (authToken!==null) {
//     return true;
//   }
//   return false;
// }


