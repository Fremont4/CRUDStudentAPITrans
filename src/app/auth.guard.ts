// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { RegisterService } from './Services/register.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private registerServices: RegisterService, public router: Router){}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
//      {
//       if (this.registerServices.isLoggedIn !==true) {
//         window.alert("Access not allowed!");
//       this.router.navigate(['/login'])
        
//       }
//     return true;
//   }
  
// }
