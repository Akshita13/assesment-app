import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Students } from '../students.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  studentForm:FormGroup;
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



  public updateStudent():void{
    this.studentService.updateStudent(this.studentForm.value).subscribe(
      ()=>{ this.router.navigate(['view'])}
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
