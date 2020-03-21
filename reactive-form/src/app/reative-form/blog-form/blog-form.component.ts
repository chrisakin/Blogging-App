import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 


@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  courseTitles = ['MEAN Stack', 'MEVN Stack', 'MERN Stack'];

  myform: FormGroup;
  name: FormControl;
  courseTitle: FormControl;
  duration: FormControl;

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() { 
    this.name = new FormControl('Paul Adams', Validators.required),
    this.courseTitle = new FormControl(this.courseTitles[0], Validators.required),
    this.duration = new FormControl('6 days')
  }
  createForm() { 
    this.myform = new FormGroup({
      name: this.name,
      courseTitle : this.courseTitle,
      duration: this.duration
    });
  }
  
  submitted = false;
  
  onSubmit() { this.submitted = true; console.log(this.name) }
  newStudent() {
    this.myform.reset();
  }
  
}
