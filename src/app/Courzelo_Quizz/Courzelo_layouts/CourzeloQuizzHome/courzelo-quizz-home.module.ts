import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourzeloQuizzHomeRoutingModule } from './courzelo-quizz-home-routing.module';
import { CourzeloQuizzHomeComponent } from './courzelo-quizz-home.component';
import { SharedQuizzModule } from '../../Shared/shared-quizz.module';
import { AddQuizComponent } from '../../Modules/add-quiz/add-quiz.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {HomeQuizComponent} from '../../Modules/home-quiz/home-quiz.component'
import { AddQuestionsComponent } from '../../Modules/add-questions/add-questions.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import { MatNativeDateModule } from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import { QuizManagementComponent } from '../../Modules/quiz-management/quiz-management.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import { QuizDetailComponent } from '../../Modules/quiz-detail/quiz-detail.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    CourzeloQuizzHomeComponent,
    AddQuizComponent,
    HomeQuizComponent,
    AddQuestionsComponent,
    QuizManagementComponent,
    QuizDetailComponent,
  ],
  imports: [
    CommonModule,
    CourzeloQuizzHomeRoutingModule,
    SharedQuizzModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRadioModule,
    MatStepperModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports:[
    CourzeloQuizzHomeComponent
  ]
})
export class CourzeloQuizzHomeModule { }
