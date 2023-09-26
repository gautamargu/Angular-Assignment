import { Component, OnInit , } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  people: any[] = [];

  constructor(private dataService: DataService){}
  ngOnInit(): void{
    this.dataService.getPosts().subscribe((data) => {
      this.people= data;
    })

  }
  // people = [
  //   { id:1,name: 'Vinit', address: 'Gandhinagar', dob: '2003-01-11', gender: 'Male' , role:'A' },
  //   { id:2,name: 'Sakshi', address: 'Azamgarh', dob: '2003-08-20', gender: 'Female',role:'B' },
  //   {id:3,name:'rohit' ,address: 'delhi' ,dob: '2001-09-21' , gender: 'Male',role:'A'},
  //   {id:4,name:'gauti' ,address: 'gandhinagar' ,dob:'2000-02-29',gender: 'Female',role:'C'},
  //   {id:5,name:'deepak' ,address: 'mumbai' ,dob:'2002-09-06',gender: 'Male',role:'B'},
  //   {id:6,name:'Varsha' ,address: 'Lucknow' ,dob:'2004-07-29',gender: 'Female',role:'C'}
    
  // ];


}
