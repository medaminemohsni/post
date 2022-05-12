import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainee/Module/calender/calender.component';
import { ArchivedCoursesTrainerComponent } from '../../Module/archived-courses-trainer/archived-courses-trainer.component';
import { AttendeesTrainerComponent } from '../../Module/attendees-trainer/attendees-trainer.component';
import { ClassWorkTrainerComponent } from '../../Module/class-work-trainer/class-work-trainer.component';
import { CoursesTrainerComponent } from '../../Module/courses-trainer/courses-trainer.component';
import { EmamsTrainerComponent } from '../../Module/emams-trainer/emams-trainer.component';
import { FluxTrainerComponent } from '../../Module/flux-trainer/flux-trainer.component';
import { GradesTrainerComponent } from '../../Module/grades-trainer/grades-trainer.component';
import { HomeWorkTrainerComponent } from '../../Module/home-work-trainer/home-work-trainer.component';
import { ModalCoursesTrainerComponent } from '../../Module/modal-courses-trainer/modal-courses-trainer.component';
import { TrainerhomeComponent } from './trainerhome.component';

const routes: Routes = [

 { path:'coursestrainer', component:CoursesTrainerComponent},
 
 { path:'archivedcoursestrainer', component:ArchivedCoursesTrainerComponent},
  { path:'trainer', component:TrainerhomeComponent,

  children: [
  
  { path:'modalcoursestrainer', component:ModalCoursesTrainerComponent},
  { path:'fluxtrainer', component:FluxTrainerComponent},
  { path:'examstrainer', component:EmamsTrainerComponent},
  { path:'attendeestrainer', component:AttendeesTrainerComponent},
  { path:'gradestrainer', component:GradesTrainerComponent},
  { path:'homeworktrainer', component:HomeWorkTrainerComponent},
  { path:'classworktrainer', component:ClassWorkTrainerComponent},
  { path:'cal', component:CalenderComponent},
 
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerhomeRoutingModule { }
