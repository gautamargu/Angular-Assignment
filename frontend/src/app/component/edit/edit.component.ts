import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm!: FormGroup;
  genders: string[] = ['Male', 'Female', 'Other'];

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    // Initialize the form group with default values (you can also populate it with data from a service)
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      DOB: ['', Validators.required],
      role: ['', Validators.required],
      gender: ['', Validators.required], 
      // Add more form controls as needed
    });
  }
  onSubmit() {
    if (this.editForm.valid) {
      // Process the form data here, e.g., send it to a service
      console.log('Form submitted:', this.editForm.value);
      console.log(this.editForm.value.name);
    }
  }
  
}
