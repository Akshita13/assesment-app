/**
 * @ author akshita kapadia
 * this file contains methods to edit and update 
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//------------------------------------------------------//
import { Students } from '../students.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.loadForm();
    this.getStudent();
  }

  public getStudent():void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id).subscribe(
      (student)=>{this.loadData(student)})
  }

  
/**
 * to take the form controls from html
 * and apply validations
 */
  public loadForm():void{
    this.studentForm=this.fb.group(
      {
        id:[""],
        name:["",Validators.required],
        rollNum:["",Validators.required],
        address:["",Validators.required],
        phoneNum:["",[Validators.required,Validators.maxLength(10)]]
  
      }
    )
  }
/**
 * 
 * to patch the values in form controls
 */
  public loadData(student:Students):void{
    this.studentForm.patchValue(
      {
        id:student.id,
        name:student.name,
        rollNum:student.rollNum,
        address:student.address,
        phoneNum:student.phoneNum,
       
      }
    )
        
  }

/**
 * after patching values and edit values,
 * to update values this method applies
 * and navigate to view
 */

  public updateStudent():void{
    this.studentService.updateStudent(this.studentForm.value).subscribe(
      ()=>{ this.router.navigate(['view'])}
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
