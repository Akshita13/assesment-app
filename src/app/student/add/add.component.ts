/**
 * @author akshita kapadia
 * this file contains method to add the students to form
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
//------------------------------------------------------//
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  /**
   * @property studentForm is to add the student data to form
   */
  studentForm:FormGroup;
  /**
   * 
   * @param studentService to inject studentservice
   * @param fb to take formbuilder which is class to from directives
   * @param router to navigate
   */
  constructor(private studentService:StudentService,
    private fb:FormBuilder,
    private router:Router) { }

  ngOnInit() {
    this.loadForm();
  }

/**
 * to take the form controls from html
 * and apply validations
 */
  public loadForm():void{
    this.studentForm=this.fb.group(
      {
        name:["",Validators.required],
        rollNum:["",Validators.required],
        address:["",Validators.required],
        phoneNum:["",[Validators.required,Validators.maxLength(10)]],
   
      }
    )
  }

  /**
   * 
   * use to add students to the form using subscribing service methods
   */
  public addStudent(student):void{
    this.studentService.addStudent(student).subscribe(
      ()=>{this.studentForm}
      )
     
  }

  /**
   * these methods use to get the controls from html and apply validations
   */

  public get name():AbstractControl
  {
    return this.studentForm.get('name');
  }

  public get rollNum():AbstractControl
  {
    return this.studentForm.get('rollNum');
  }

  public get address():AbstractControl
  {
    return this.studentForm.get('address');
  }

  public get phoneNum():AbstractControl
  {
    return this.studentForm.get('phoneNum');
  }



}
