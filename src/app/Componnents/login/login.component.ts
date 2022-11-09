import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  createLoginPage!: FormGroup;
  
  studentNo!:string;

  errorMessage: '' | undefined;
  currentUser = {};

  constructor(private registerServices: RegisterService, private router: Router, private fb: FormBuilder, private storageServices: StorageService) 
  {
   

   }

  ngOnInit(): void {
    this.createLoginPage = this.fb.group({
      studentNo:'',
      password:'',

    })
  }

  loginStudent(){
    // console.log(this.createLoginPage.value)
    this.registerServices.loginStudent(this.createLoginPage.value)
    .subscribe({
      next:(response:any)=>{
        this.studentNo= this.createLoginPage.value.studentNo 
        localStorage.setItem('studentNo',this.studentNo)
        alert  (response.message)
        // this.router.navigate(['dashboard'])
        // localStorage.setItem('access_token', response.token)
        // localStorage.setItem('studentNo',response.studentNo)
      
        this.router.navigate(['dashboard'])
        //  this.registerServices.getStudentProfile(response.studentNo).subscribe((response)=>{
        //   this.currentUser = response;
        //   this.router.navigate(['dashboard'])
          
        //  })
      
      },
      error:  err=>{
        alert('something went wrong');
        

      }
    })
  }




logout() {
  if (localStorage.removeItem('access_token') == null) {
    this.router.navigate(['login']);
  }
}

}
