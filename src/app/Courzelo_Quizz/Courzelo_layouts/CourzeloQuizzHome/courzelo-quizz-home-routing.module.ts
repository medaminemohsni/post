import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuizComponent } from '../../Modules/add-quiz/add-quiz.component';
import { HomeQuizComponent } from '../../Modules/home-quiz/home-quiz.component';
import { CourzeloQuizzHomeComponent } from './courzelo-quizz-home.component';
import { AddQuestionsComponent } from '../../Modules/add-questions/add-questions.component';
import { QuizManagementComponent } from '../../Modules/quiz-management/quiz-management.component';
import { QuizDetailComponent } from '../../Modules/quiz-detail/quiz-detail.component';
const routes: Routes = [
  { path:'', component: CourzeloQuizzHomeComponent,
  children: [
    { path: '', component: HomeQuizComponent },
    { path: 'AddQuiz', component: AddQuizComponent },
    { path: 'AddQuestions/:id', component: AddQuestionsComponent },
    { path: 'Quizmanagement', component: QuizManagementComponent },
    { path: 'quizdetail/:id', component: QuizDetailComponent }  
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourzeloQuizzHomeRoutingModule { }
