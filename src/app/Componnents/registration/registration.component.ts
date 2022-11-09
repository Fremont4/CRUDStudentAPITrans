import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  createRegistrationForm!: FormGroup;

  constructor(private fb:FormBuilder, private registerServices: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.createRegistrationForm = this.fb.group({
      studentName:[''],
      studentNo:[''],
      email:[''],
      password:[''],
      confirmPassword:[''],
    })
  }

 addStudent(){
    this.registerServices.addStudent(this.createRegistrationForm).subscribe({
    next: (response: any)=>{
      // console.log(this.createRegistrationForm.value)
      alert ('student registered successfuly');
      this.router.navigate(['/login']);
      // this.createRegistrationForm.reset();
    },
    error:  err=>{
      alert('something went wrong');
      
  
    }
  })
 }
}

 
