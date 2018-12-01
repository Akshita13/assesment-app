import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Students } from './students.model';

@Injectable()
export class StudentService {

  private url='http://localhost:3000/Students';

  constructor(private http:HttpClient) { }

  public getStudents(): Observable<Students[]> {
    return this.http.get<Students[]>(this.url);
  }

  public getStudent(id:number): Observable<Students> {
    return this.http.get<Students>(this.url+"/"+id);
  }

  public deleteStudent(id:number): Observable<Students> {
    return this.http.delete<Students>(this.url+"/"+id);
  }

  public addStudent(student:Students): Observable<Students> {
    return this.http.post<Students>(this.url,student);
  }

  public updateStudent(student:Students): Observable<Students> {
    return this.http.put<Students>(this.url+"/"+student.id,student);
  }

}
