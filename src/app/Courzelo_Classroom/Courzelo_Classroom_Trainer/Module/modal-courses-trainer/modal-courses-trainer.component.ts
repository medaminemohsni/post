import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainee/Shared/entities/Formation';
import { FormationService } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainee/Shared/services/formation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-courses-trainer',
  templateUrl: './modal-courses-trainer.component.html',
  styleUrls: ['./modal-courses-trainer.component.css']
})
export class ModalCoursesTrainerComponent implements OnInit {

  Form!: FormGroup;
 
 formation!:Formation[]
  constructor(public router: Router, private route: ActivatedRoute, private diag: MatDialog,  public dialogRef: MatDialogRef<ModalCoursesTrainerComponent>,private formationService:FormationService,@Inject(MAT_DIALOG_DATA) public data: any,private formationb: FormBuilder) 
  { }

  ngOnInit(): void {
  this.Form = this.formationb.group({
     
      coursename : ['', Validators.required],
      date: ['', Validators.required],
      difficultylevel  : ['', Validators.required ],
      category  : ['', Validators.required ],
      coursesummary: ['', Validators.required ],
      instructorname: ['', Validators.required ],
       descriptioncourse: ['', Validators.required ],
      descriptiontrainer: ['', Validators.required ],
      price: ['', Validators.required ],
    })

  
  }


  coursenameFormControl = new FormControl('', [Validators.required, ]);
  coursesummaryFormControl = new FormControl('', [Validators.required, ]);
    instructornameFormControl = new FormControl('', [Validators.required, ]);
    priceFormControl = new FormControl('', [Validators.required, ]);
  

  Addformation(){
    
    this.Form.get('requirement')?.setValue((this.Form.get('requirement')?.value).split(','));
  
    this.formationService.addFormations(3,this.Form.value)
      .subscribe(
        res => 
        
      { 
        

        window.location.reload()



      

     
      
    
      },
      err=>
      { console.log(err);
        
      })
        
  }


  closeDialog() {
    this.dialogRef.close(false);
   
  }

  
  Reset() {
    this.Form.reset(); 
}

public hasError = (controlName: string, errorName: string) =>{
  this.Form.markAllAsTouched();
  return this.Form.controls[controlName].hasError(errorName);
}

Difficultylevel = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  Difficulty = [
  ];


  Categorylevel = new FormControl('', Validators.required);
  selectFormControl1 = new FormControl('', Validators.required);
  Category = [  
  ];


}


