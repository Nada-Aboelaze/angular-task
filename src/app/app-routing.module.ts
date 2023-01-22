import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AddStudentComponent} from './add-student/add-student.component'
import {ListStudentsComponent} from './list-students/list-students.component'
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'add-student',component:AddStudentComponent},
  {path:'list-students',component:ListStudentsComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
