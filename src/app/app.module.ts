import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ListStudentsComponent } from './list-students/list-students.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    HomeComponent,
    ListStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
