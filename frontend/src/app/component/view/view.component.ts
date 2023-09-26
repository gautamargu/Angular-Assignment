import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private dataService: DataService){}

  ngOnInit(): void {

    this.route.params.subscribe((params)=>{
      const id = +params['id'];
      console.log(id);
      this.dataService.getDataById(id).subscribe(result => {
        this.data =result;
      });
    })


  }
  // ngOnInit(): void {
  //   const id = +this.route.snapshot.paramMap.get('id'); // Get the ID from the route

  //   this.dataService.getDataById(id).subscribe(result => {
  //     this.data = result;
  //   });
  
}
