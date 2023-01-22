import { Component, OnInit } from '@angular/core';
import { student } from './../models/student-info';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  students: student[] = [];

  addStudent(firstName:string , lastName:string , age:number): void
  {
    console.log(this.isStudentExists(firstName, lastName, age));
    if(!this.isStudentExists(firstName, lastName, age))
    {
      this.students.push({
        firstName:firstName,
        lastName:lastName,
        age:age
      })
    }
  }

  getStudentNumber():number
  {
    return this.students.length;
  }

  deleteStudent(index:number):void
  {
    this.students.splice(index,1);
  }

  getFullName(student:student):string
  {
    return student.firstName+" "+student.lastName;
  }
  isStudentExists(firstName:string , lastName:string , age:number ):boolean
  {
    return this.students.some(student =>{
      return student.firstName==firstName
      && student.lastName==lastName
      && student.age==age;
    });
  }

}
