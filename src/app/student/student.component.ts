import { student } from './../models/student-info';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent  {

  students: student[] = [];

  addStudent(firstName:string , lastName:string , age:number): void
  {
    console.log(this.isExistStudent(firstName, lastName, age));
    if(!this.isExistStudent(firstName, lastName, age))
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
  isExistStudent(firstName:string , lastName:string , age:number ):boolean
  {
    return this.students.some(student =>{
      return student.firstName==firstName
      && student.lastName==lastName
      && student.age==age;
    });
  }

  sortStudents():student[]
  {
    this.students.sort((student1,student2)=>student1.age>student2.age ? 1 : -1)
    return this.students;
  }

}
