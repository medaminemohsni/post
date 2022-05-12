import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseHomeComponent } from '../../Modules/course-home/course-home.component';
import { CourseComponent } from '../../Modules/course/course.component';
import { InstructorComponent } from '../../Modules/instructor/instructor.component';
import { ManageCourseComponent } from '../../Modules/manage-course/manage-course.component';
import { TrainerComponent } from './trainer.component';
const routes: Routes = [
  { path:'', component:  TrainerComponent,
  children: [
    { path: 'course', component:CourseComponent },
    { path: 'becomeInstructor', component:InstructorComponent },
    { path: 'takenCourses', component:ManageCourseComponent },
    { path: 'courseHome', component:CourseHomeComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }
