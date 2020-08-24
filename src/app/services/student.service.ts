import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {


  url ='https://localhost:44302/api/Students';

  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.url)
      
  }


  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(this.url + '/' + id)
      
  }

  saveStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.url, JSON.stringify(student), this.httpOptions)
      
  }

   // utualiza um carro
   updateStudent(student: Student): Observable<Student> {
    return this.httpClient.put<Student>(this.url + '/' + student.Id, JSON.stringify(student), this.httpOptions)
     
  }

  deleteStudent(student: Student) {
    return this.httpClient.delete<Student>(this.url + '/' + student.Id, this.httpOptions)
      
  }

  





  


    





  
}
