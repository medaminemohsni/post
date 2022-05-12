import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourzeloBusinessHomeRoutingModule } from './courzelo-business-home-routing.module';
import { CourzeloBusinessHomeComponent } from './courzelo-business-home.component';
import { RouterModule } from '@angular/router';
import { SharedBusinessModule } from '../../Shared/shared-business.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from '../../Modules/register/register.component';
import { HomepageComponent } from '../../Modules/homepage/homepage.component';
import { JobOffersComponent } from '../../Modules/job-offers/job-offers.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { AddJobDialogComponent } from '../../Modules/add-job-dialog/add-job-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdJobDialogComponent } from '../../Modules/upd-job-dialog/upd-job-dialog.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import { AboutUsComponent } from '../../Modules/about-us/about-us.component';
import { CandidateJobsComponent } from '../../Modules/candidate-jobs/candidate-jobs.component';
import { CandidateAppComponent } from '../../Modules/candidate-app/candidate-app.component';
import { BusinessLoginComponent } from '../../Modules/business-login/business-login.component';
import { TestsComponent } from '../../Modules/tests/tests.component';
import { AddTestDialogComponent } from '../../Modules/add-test-dialog/add-test-dialog.component';
import { QuestionsComponent } from '../../Modules/questions/questions.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatTooltipModule} from '@angular/material/tooltip';
import { JobDetailsComponent } from '../../Modules/job-details/job-details.component';
@NgModule({
  declarations: [
    CourzeloBusinessHomeComponent,
    RegisterComponent,
    HomepageComponent,
    JobOffersComponent,
    AddJobDialogComponent,
    UpdJobDialogComponent,
    AboutUsComponent,
    CandidateJobsComponent,
    CandidateAppComponent,
    BusinessLoginComponent,
    TestsComponent,
    AddTestDialogComponent,
    QuestionsComponent,
    JobDetailsComponent
  ],
  imports: [
    CommonModule,
    CourzeloBusinessHomeRoutingModule,
    RouterModule,
    SharedBusinessModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatGridListModule,
    MatStepperModule,
    MatCheckboxModule,
    MatRadioModule,
    IvyCarouselModule,
    MatTooltipModule  
  ],
  exports:[
    CourzeloBusinessHomeComponent,
  ]
})
export class CourzeloBusinessHomeModule { }
