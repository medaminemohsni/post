import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivedCoursesTrainerComponent } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainer/Module/archived-courses-trainer/archived-courses-trainer.component';
import { ArchivedcoursesComponent } from '../../Module/archivedcourses/archivedcourses.component';
import { CalenderComponent } from '../../Module/calender/calender.component';
import { DetailFormationComponent } from '../../Module/detail-formation/detail-formation.component';
import { EspaceFormationComponent } from '../../Module/espace-formation/espace-formation.component';
import { FormationComponent } from '../../Module/formation/formation.component';
import { MyclassesComponent } from '../../Module/myclasses/myclasses.component';
import { ClassroomTraineehomeComponent } from './classroomTraineehome.component';


const routes: Routes = [
  
  { path: 'courses', component: FormationComponent}, 
  { path: 'detailFormation', component:DetailFormationComponent},
  { path:'sidebar', component: ClassroomTraineehomeComponent,
  
  children: [

  { path:'espaceformation', component:EspaceFormationComponent},
   { path:'archivedcourses', component:ArchivedcoursesComponent},
   { path:'myClasses', component:MyclassesComponent},

  
  ] }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomhomeComponentRoutingModule { }
