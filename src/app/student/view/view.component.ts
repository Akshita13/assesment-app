import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service';
import { Students } from '../students.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public students:Students[];
  public headers:any[];
  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit() {
    this.headers= ["id","name","rollNum","address","phoneNum"];
    this.getStudents();
   
  }

  public getStudents():void{
    this.studentService.getStudents().subscribe(
      student=>{
        this.students=student
        console.log(this.students);
      }
    )
  }

  public deleteStudent(id:number):void
  {
    this.studentService.deleteStudent(id).subscribe(()=>{this.getStudents();});  
  }

  public getStudent(id:number):void{
    this.router.navigate(['edit/'+id]);
  }

}
