import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../../Shared/entities/Quiz';
import { QuizService } from '../../Shared/services/quiz.service';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  fbuilder: FormBuilder = new FormBuilder();
  questionform!: FormGroup;
  questionformY_N!: FormGroup;
  questionformO_Q!: FormGroup;
  questionformQCU!: FormGroup;
  questionformQCM!: FormGroup;
  quiz: Quiz = new Quiz();
  selected!: string;
  selectable = false;
  idquiz!: string;
  correctanswerone_YN!: string;
  types: string[] = ['MCQ', 'SCQ', 'Y/N', 'Open_questions'];
  correct: string[] = [];
  wrong: string[] = [];
  idcard!:number;
  @ViewChild('stepper') stepper!: MatStepper;

  constructor(private ar: ActivatedRoute, private quizservice: QuizService, private _router: Router) { }


  ngOnInit(): void {
    this.ar.paramMap.subscribe(params => {
      this.idquiz = String(params.get('id'));

    });


    this.quizservice.getquizbyid(this.idquiz).subscribe(res => this.quiz = res);


    this.questionformY_N = this.fbuilder.group({


      question: ['', [Validators.required]],
      correctanswerone_YN: ['', [Validators.required]],
      points: ['', [Validators.required]],

    })

    this.questionformO_Q = this.fbuilder.group({


      question: ['', [Validators.required]],
      correctanswer: ['', [Validators.required]],
      points: ['', [Validators.required]],

    })

    this.questionformQCU = this.fbuilder.group({


      question: ['', [Validators.required]],
      correctanswer: ['', [Validators.required]],
      wronganswerone: ['', [Validators.required]],
      wronganswertwo: ['', [Validators.required]],
      points: ['', [Validators.required]],

    })

    this.questionformQCM = this.fbuilder.group({


      question: ['', [Validators.required]],
      correctanswerone: ['', [Validators.required]],
      correctanswertwo: ['', [Validators.required]],
      wronganswer: ['', [Validators.required]],
      points: ['', [Validators.required]],

    })


  }


  public hasError(controlName: string, errorName: string) {

    this.questionformY_N.markAsTouched();

    return this.questionformY_N.controls[controlName].hasError(errorName);
  }

  get(type: string): void {
    this.selectable = true;
    this.selected = type;
    this.quiz.type = this.selected;

  }
  add() {

    switch (this.selected) {
      case "SCQ": {

        this.correct.push(this.questionformQCU.value.correctanswer);
        this.wrong.push(this.questionformQCU.value.wronganswerone, this.questionformQCU.value.wronganswertwo)
        this.quiz.questionsList.push({
          question: this.questionformQCU.value.question,
          points: this.questionformQCU.value.points,
          correctanswer: this.correct,
          wronganswer: this.wrong,

        });
        this.questionformQCU.reset();

        break;
      }
      case "MCQ": {
        this.correct.push(this.questionformQCM.value.correctanswerone, this.questionformQCM.value.correctanswertwo);
        this.wrong.push(this.questionformQCM.value.wronganswer)
        this.quiz.questionsList.push({
          question: this.questionformQCM.value.question,
          points: this.questionformQCM.value.points,
          correctanswer: this.correct,
          wronganswer: this.wrong,

        });
        this.questionformQCM.reset();

        break;
      }
      case "Open_questions": {
        this.correct.push(this.questionformO_Q.value.correctanswer);
        this.quiz.questionsList.push({
          question: this.questionformO_Q.value.question,
          points: this.questionformO_Q.value.points,
          correctanswer: this.correct,
          wronganswer: this.wrong,

        });
        this.questionformO_Q.reset();

        break;
      }
      case "Y/N": {
        this.correct.push(this.questionformY_N.value.correctanswerone_YN);
        if (this.questionformY_N.value.correctanswerone_YN == "Yes") { this.wrong.push("No") }
        else {
          this.wrong.push("yes");
        }
        this.quiz.questionsList.push({
          question: this.questionformY_N.value.question,
          points: this.questionformY_N.value.points,
          correctanswer: this.correct,
          wronganswer: this.wrong,

        });
        this.questionformY_N.reset();
        break;
      }
    }


    this.quizservice.updatequiz(this.idquiz, this.quiz).subscribe(res => Swal.fire({
      title: 'Question added successfully .!.  add another question!',
      icon: 'success',
      confirmButtonColor: '#07294d',
    }));

    this.correct = []
    this.wrong = []



  }


}
