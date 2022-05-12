import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TestsService } from '../../Shared/services/Tests.service';

import Swal from "sweetalert2";
import { Question } from '../../Shared/entities/Tests';

import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-add-test-dialog',
  templateUrl: './add-test-dialog.component.html',
  styleUrls: ['./add-test-dialog.component.css']
})
export class AddTestDialogComponent implements OnInit {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  newFormGroup!:FormGroup;
  @ViewChild("stepper", { static: false }) stepper!: MatStepper;

  idTest="624c49777db2821b1718a4f7";
  questions!:Question[];
  
  constructor(private testsService:TestsService,private fb: FormBuilder) 
  { }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
     
      title : ['', Validators.required],
      creationDate: [new Date(), Validators.required],
      type: ['', Validators.required],
    })
    


    this.secondFormGroup = this.fb.group({
     
      questionLabel : ['', Validators.required],
      falseResponses: ['', Validators.required],
      correctResponses: ['', Validators.required],
      score: [10, Validators.required],
      time: [1, Validators.required],
      
    })
    
    this.newFormGroup=this.fb.group({
      questions: this.fb.array([]) 
    })
    
  }


  Questions() : FormArray {
    return this.newFormGroup.get("questions") as FormArray
  }


  newQuestion(): FormGroup {
    return this.fb.group({
      questionLabel : ['', Validators.required],
      falseResponses: ['', Validators.required],
      correctResponses: ['', Validators.required],
      score: [10, Validators.required],
      time: [1, Validators.required],
    })
    
  }


  addMore() {
    this.Questions().push(this.newQuestion());
  }

  removeQuestion(i:number) {
    this.Questions().removeAt(i);
    
  }


  AddAll(){

    
    if(this.secondFormGroup.valid && this.Questions().valid){
      Swal.fire({
        title: 'Are u sure ?',
        text: "all the questions will be added to the test !",
        icon: 'warning',
        confirmButtonColor: '#07294d',
        cancelButtonColor: '#d33',
        showCancelButton: true,
        confirmButtonText: 'Sure',
      }).then((result) => {
        if (result.isConfirmed) {
        this.AddQuestion(this.secondFormGroup);
        for(let i=0;i<this.Questions().length;i++){
        this.AddQuestion(this.Questions().at(i));
        }
        Swal.fire({
          title: 'Questions added successfuly',
          icon:'success',
          confirmButtonColor: '#07294d'
           })
      }
    })
  }
    else {
    this.validateAllFormFields(this.secondFormGroup) ;
    for(let i=0;i<this.Questions().length;i++){
      this.validateAllFormFields(this.Questions().at(i) as FormGroup);
   }
      
   
  }
  }
      


 



    AddTest(){
    
      if(this.firstFormGroup.invalid){
        this.validateAllFormFields(this.firstFormGroup);
      }
      else if(this.firstFormGroup.valid){
      this.testsService.PostTest(this.firstFormGroup.value)
        .subscribe(
          res =>
        {  this.idTest=res.idTest;
           console.log(res);
        Swal.fire({
          title: 'test created successufly ! Next add your questions',
          icon:'success',
          confirmButtonColor: '#07294d'
           })
        this.stepper.next();
        },
        err=>
        { console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! ' + err,
            
          })
          
        })
      }
    }


    AddQuestion(form:any){
      
      if (form.invalid) {
        this.validateAllFormFields(form);
      }
      else if(form.valid){ 
      form.get('correctResponses')?.setValue((form.get('correctResponses')?.value).split('\n'));
      form.get('falseResponses')?.setValue((form.get('falseResponses')?.value).split('\n'));
      this.testsService.AddQuestion(this.idTest,form.value)
        .subscribe(
          res => 
        { 
        console.log(res);
        Swal.fire({
          title: 'Questions created successufly !',
          icon:'success',
          confirmButtonColor: '#07294d'
           })
          
        },
        err=>
        { console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! ' + err,
            
          })
          
        })
    
      }
      
    }


    validateAllFormFields(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
        //console.log(field);
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        }
      });
    }
  
    

    Finish()
    {
       if (this.secondFormGroup.value){
        
        this.stepper.next();
        this.GetQuestion(this.idTest);
       }
     
    }
     
  Reset(form:any) {
    
    form.reset();
    
}



  GetQuestion(idTest:any){
    this.testsService.GetQuestions(idTest).subscribe(data=>{
      this.questions=data;
        },err=>{
       console.log(err);
     })

  }


  DeleteQuestion(questionId:any){
    this.testsService.DeleteQuestions(this.idTest,questionId).subscribe(res=>{
      this.GetQuestion(this.idTest);
    }
      )
    }
   
  }

