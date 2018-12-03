/**
 * @author akshita kapadia
 * this file contais method to get students and deletestudents 
 * and from this file we provide headers and data to child
 */
import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
//-------------------------------------------------//
import { Students } from '../students.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  /**
   * @property students is to get the students
   * @property headers is to get the headers that we defined
   * these headers and students give it to html to apply @input() to child
   */
  public students:Students[];
  public headers:any[];

  /**
   * 
   * @param studentService to use service methods
   * @param router is to nevigate to another page
   */
  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit() {
    this.headers= ["id","name","roll-Num","address","phone-Num"];
    this.getStudents();
   
  }

  /**
   * @method is taking the data from service and by subscibing it we can get students everytime
   * and give this to html to print
   */
  public getStudents():void{
    this.studentService.getStudents().subscribe(
      student=>{
        this.students=student
console.log(student);
       
      }
    )
  }

  /**
   * 
   * @param id is to delete student of perticular id
   * @method is use to subscribe the method that we create in service and delete the student 
   * perform eventemitter from child 
   */

  public onDelete(id:number):void
  {
    this.studentService.deleteStudent(id).subscribe(()=>{this.getStudents();});  
  }

  /**
   * 
   * perform eventemitter on this method 
   * and apply navigation
   */
  public onEdit(id:number):void{
    this.router.navigate(['edit/'+id]);
  }

}
