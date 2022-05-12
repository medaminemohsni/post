
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassroomTraineehomeModule } from './Courzelo_Classroom/Courzelo_Classroom_Trainee/Courzelo_Classroom_layouts/classroomTraineehome/classroomTraineehome.module';
import { CourzeloCorehomeModule } from './Courzelo_Core/Courzelo_Core_layouts/courzelo-corehome/courzelo-corehome.module';
import {TrainerModule} from './Courzelo_Trainer/Courzelo_Trainer_layouts/courzelo-trainerhome/trainer.module';
import { CourzeloQuizzHomeModule } from './Courzelo_Quizz/Courzelo_layouts/CourzeloQuizzHome/courzelo-quizz-home.module';
import { CourzeloBusinessHomeModule } from './Courzelo_Business/Courzelo_Business_layouts/Courzelo_businessHome/courzelo-business-home.module';
import { CourzeloStackHomeModule } from './Courzelo_Stack/Courzelo_Stack_layouts/Courzelo_StackHome/courzelo-stack-home.module';
import { CourzeloSkillsHomeModule } from './Courzelo_Skills/Courzelo_Skills_layouts/Courzelo_SkillsHome/courzelo-skills-home.module';
import { CourzeloAdminHomeModule } from './Courzelo_Admin/Courzelo_Admin_layouts/Courzelo_AdminHome/courzelo-admin-home.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrainerhomeModule } from './Courzelo_Classroom/Courzelo_Classroom_Trainer/Courzelo_Classroom_Trainer_layouts/Trainerhome/trainerhome.module';
import { FormsModule } from '@angular/forms';
import { ConfirmEmailComponent } from './Courzelo_Core/Modules/confirm-email/confirm-email.component';
import { CalenderComponent } from './Courzelo_Classroom/Courzelo_Classroom_Trainee/Module/calender/calender.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';





@NgModule({
  declarations: [
    AppComponent,
    ConfirmEmailComponent,
    CalenderComponent,
  
    
    
    
    
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClassroomTraineehomeModule,
    CourzeloCorehomeModule,
    TrainerModule,
    AppRoutingModule,
    HttpClientModule,
    CourzeloQuizzHomeModule,
    CourzeloBusinessHomeModule,
    CourzeloStackHomeModule,
    CourzeloSkillsHomeModule,
    CourzeloAdminHomeModule,
    BrowserAnimationsModule,
    TrainerhomeModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
