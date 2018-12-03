/**
 * @author akshita kapadia
 * this file contains all services to interact with server
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//------------------------------------------------------//
import { Students } from './students.model';

@Injectable()
export class StudentService {

  /**
   * set url for database of json server 
   */
  private url='http://localhost:3000/Students';

  /**
   * 
   * @param http inject httpclient from httpclientmodule for 
   * http request response of services
   */
  constructor(private http:HttpClient) { }

  /**
   * @method use to get the students data from server
   */
  public getStudents(): Observable<Students[]> {
    return this.http.get<Students[]>(this.url);
  }
  /**
   * 
   * @param id is to get the data of perticular student id
   */

  public getStudent(id:number): Observable<Students> {
    return this.http.get<Students>(this.url+"/"+id);
  }

  /**
   * 
   * @param id is for delete the perticular student from server
   */
  public deleteStudent(id:number): Observable<Students> {
    return this.http.delete<Students>(this.url+"/"+id);
  }

  /**
   * 
   * @method to add the student data on server
   */
  public addStudent(student:Students): Observable<Students> {
    return this.http.post<Students>(this.url,student);
  }

  /**
   * 
   * @method to update the student data on server
   */
  public updateStudent(student:Students): Observable<Students> {
    return this.http.put<Students>(this.url+"/"+student.id,student);
  }

}
