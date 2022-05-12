import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../../Modules/about-us/about-us.component';
import { AddTestDialogComponent } from '../../Modules/add-test-dialog/add-test-dialog.component';
import { BusinessLoginComponent } from '../../Modules/business-login/business-login.component';
import { CandidateAppComponent } from '../../Modules/candidate-app/candidate-app.component';
import { CandidateJobsComponent } from '../../Modules/candidate-jobs/candidate-jobs.component';
import { HomepageComponent } from '../../Modules/homepage/homepage.component';
import { JobOffersComponent } from '../../Modules/job-offers/job-offers.component';
import { RegisterComponent } from '../../Modules/register/register.component';
import { TestsComponent } from '../../Modules/tests/tests.component';
import { CourzeloBusinessHomeComponent } from './courzelo-business-home.component';
const routes: Routes = [
  { path:'', component: CourzeloBusinessHomeComponent,
    children: [
    { path: '', component: RegisterComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'homepage', component: HomepageComponent },
    { path: 'jobOffers', component: JobOffersComponent },
    { path: 'AboutUs', component: AboutUsComponent },
    { path: 'CandidateJobs', component: CandidateJobsComponent },
    { path: 'CandidateApps', component: CandidateAppComponent },
    { path: 'Tests', component: TestsComponent},    
    { path: 'AddTests', component: AddTestDialogComponent   },
    { path:'BusinessLogin', component: BusinessLoginComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourzeloBusinessHomeRoutingModule { }
