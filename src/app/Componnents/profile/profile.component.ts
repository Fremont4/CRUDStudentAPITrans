import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { Users } from 'src/app/Model/Users';
import { RegisterService } from 'src/app/Services/register.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy{
  
  private sub!: Subscription;

  users: Users ;
  studentNo:string;
  // currentUser: Object={};
  
  // users:Users[]=[];

  constructor(private registerServices:RegisterService, private storageServices: StorageService, private  activatedRoute: ActivatedRoute)
   { 
    this.studentNo=localStorage.getItem('studentNo');
    console.log(this.studentNo)
    // let StudentNo = this.activatedRoute.snapshot.paramMap.get('StudentNo');
    // this.registerServices.getStudentProfile(StudentNo).subscribe(response=>{
    //   this.users = response;
    // });
   }

  ngOnInit(): void {

      this.registerServices.getStudentProfile(this.studentNo).subscribe(response=>{
      this.users = response;
      console.log(this.users)
    });
    // this.registerServices.getAllStudents()
    // .subscribe({
    //   next: (users)=>{
    //   this.users = users
    //   }
    // })

    // console.log(this.currentUser)
    // this.sub = this.activatedRoute.params.subscribe(params=>{
    //   this.currentUser=parseInt(params['profile']);
    //   this.registerServices.getStudentProfile(this.currentUser).pipe(
    //     map((users: Users) => this.users = users) ).subscribe()
    // });

  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }


}
