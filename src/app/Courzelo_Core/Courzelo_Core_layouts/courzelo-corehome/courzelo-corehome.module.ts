import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourzeloCorehomeComponent } from './courzelo-corehome.component';
import { CourzeloCorehomeRoutingModule } from './courzelo-corehome-routing.module';
import { SharedCoreModule } from '../../Shared/shared-core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../Shared/Interceptor/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../../Modules/login/login.component';
import { RegisterComponent } from '../../Modules/register/register.component';
import { HomeComponent } from '../../Modules/home/home.component';
import { ForgetPasswordComponent } from '../../Modules/forget-password/forget-password.component';
import { ResetPasswordComponent } from '../../Modules/reset-password/reset-password.component';
import { ProfileComponent } from '../../Modules/profile/profile.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { CoursesPerCategoryComponent } from '../../Modules/courses-per-category/courses-per-category.component';
import { SingleCourseDetailComponent } from '../../Modules/single-course-detail/single-course-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AccueilComponent } from '../../Modules/accueil/accueil.component';
import { AccueilclassesComponent } from '../../Modules/accueilclasses/accueilclasses.component';

@NgModule({
  declarations: [
    CourzeloCorehomeComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ProfileComponent,
    CoursesPerCategoryComponent,
    SingleCourseDetailComponent,
    AccueilComponent,
    AccueilclassesComponent
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    CourzeloCorehomeRoutingModule,
    MatTabsModule,
    IvyCarouselModule,
    MatIconModule,
    MatExpansionModule,
    MatCheckboxModule,
    SharedCoreModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  exports:[
    CourzeloCorehomeComponent,
    SharedCoreModule
  ]
})
export class CourzeloCorehomeModule { }
