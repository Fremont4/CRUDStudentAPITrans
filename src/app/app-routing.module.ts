import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './Componnents/dashboard/dashboard.component';
import { LoginComponent } from './Componnents/login/login.component';
import { ProfileComponent } from './Componnents/profile/profile.component';
import { RegistrationComponent } from './Componnents/registration/registration.component';

const routes: Routes = [
  {
    path:"registration",
    component:RegistrationComponent
  },

  {
    path:"",
    component:LoginComponent
  },

  {
    path:"profile",
    component:ProfileComponent
  },
  
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"profile",
    component:ProfileComponent,
   // canActivate: [AuthGuard]
    
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
