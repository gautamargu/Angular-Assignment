import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;
  genders: string[] = ['Male', 'Female', 'Other'];


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private dataService: DataService
  ){
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      role: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.userForm.valid){
      const userData = this.userForm.value;
      console.log(userData);


      // this.http.post('http://localhost:3000/api/users', userData, {
      //   headers: new HttpHeaders()
      // }).subscribe((res) => {
      //   console.log(res);
        
      //   // this.router.navigate(['/']);
      // },
      // (err) => {
      //   console.log(err);
      // });


      this.dataService.postData(userData)
        .subscribe(res => {
          // console.log("dgjlkadjsjg = ", res);

          this.router.navigate(['/']);
        })
    }
  }
}
