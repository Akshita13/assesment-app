import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  studentForm:FormGroup;
  constructor(private studentService:StudentService,
    private fb:FormBuilder,
    private router:Router) { }

  ngOnInit() {
    this.loadForm();
  }


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

  public addStudent(student):void{
    this.studentService.addStudent(student).subscribe(
      ()=>{this.studentForm}
      )
     
  }

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
