import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerRoutingModule } from './trainer-routing.module';
import { TrainerComponent } from './trainer.component';
import { SharedTrainerModule } from '../../Shared/shared-trainer.module';
import { CourseComponent } from '../../Modules/course/course.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { CourseHomeComponent } from '../../Modules/course-home/course-home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatTableModule} from '@angular/material/table';
import { ManageCourseComponent } from '../../Modules/manage-course/manage-course.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
@NgModule({
  declarations: [
    TrainerComponent,
    CourseComponent,
    CourseHomeComponent,
    ManageCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TrainerRoutingModule,
    SharedTrainerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    IvyCarouselModule,
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTreeModule
   ],
  exports:[
    TrainerComponent
  ]
})
export class TrainerModule { }
