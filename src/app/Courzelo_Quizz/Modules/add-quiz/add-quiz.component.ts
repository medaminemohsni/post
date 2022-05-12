
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatStepper } from '@angular/material/stepper';
import { Quiz } from '../../Shared/entities/Quiz';
import { QuizService } from '../../Shared/services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
    quiz:Quiz=new Quiz();
    fbuilder: FormBuilder=new FormBuilder();
    Quizform!: FormGroup;
    @ViewChild('stepper') stepper!: MatStepper;
  constructor(private quizservice : QuizService, private _router:Router) { }

  ngOnInit(): void {
    this.Quizform=this.fbuilder.group({
     
      title : ['',[Validators.required]],   
      description : ['',[Validators.required]],    
      limitdate : ['',[Validators.required]],  
      countdown : ['',[Validators.required]],
      evaluationmodel : ['',[Validators.required]],
          
        })
  }



  public hasError (controlName:string, errorName:string) {

this.Quizform.markAsTouched();
return this.Quizform.controls[controlName].hasError(errorName);
  }

  add()
  {
    this.quiz=this.Quizform.value;
    this.quiz.questionsList=[];
    this.quiz.creationdate=new Date();
   
   
  this.quizservice.addquiz(this.quiz).subscribe(res=>{Swal.fire({
    title: 'Quiz created successfully .!. Next add your questions!',
    icon: 'success',
    confirmButtonColor: '#07294d',
    }),
    
    this.stepper.selectedIndex=1;
  this._router.navigateByUrl("AddQuestions/"+res.id)}
   );
  
  }

  
}
