import { Component, OnInit } from '@angular/core';
import { StudentService } from './services/student.service';
import { Student } from './models/student';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  student = {} as Student;
  students: Student[];



  constructor(private studentService: StudentService) {}
  
  ngOnInit() {
    this.getStudents();
  }


  saveStudent(form: NgForm) {
    if (this.student.Id !== undefined) {
      this.studentService.updateStudent(this.student).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.studentService.saveStudent(this.student).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  getStudents() {
    this.studentService.getStudents().subscribe((students: Student[]) => {
      this.students = students;
    });
  }

  deleteStudent(student: Student) {
    this.studentService.deleteStudent(student).subscribe(() => {
      this.getStudents();
    });
  }

  editStudent(student: Student) {
    this.student = { ...student };
  }

  cleanForm(form: NgForm) {
    this.getStudents();
    form.resetForm();
    this.student = {} as Student;
  }

  


}
