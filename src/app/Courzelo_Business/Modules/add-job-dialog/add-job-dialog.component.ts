import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { MatDialogRef,  } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { JobOffers } from '../../Shared/entities/JobOffers';
import { JobOffersService } from '../../Shared/services/JobOffers.service';


import Swal from "sweetalert2";

@Component({
  selector: 'app-add-job-dialog',
  templateUrl: './add-job-dialog.component.html',
  styleUrls: ['./add-job-dialog.component.css']
})
export class AddJobDialogComponent implements OnInit {




  Form!: FormGroup;
  jobOffers!: JobOffers[];
  public dataSource= new  MatTableDataSource<JobOffers>();
  constructor(public dialogRef: MatDialogRef<AddJobDialogComponent>,private JobsService:JobOffersService,private fb: FormBuilder) 
  { }

  ngOnInit(): void {


    this.Getjobs();
    this.Form = this.fb.group({
     
      title : ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      deadlineDate: ['', Validators.required],
      creationDate:['', Validators.required],
      state: ['', Validators.required],
      jobType: ['', Validators.required],
      locationType: ['', Validators.required],
      location: [''],
      requirement: ['', Validators.required],
      hireNumber: ['', Validators.required],
      salary: ['', Validators.required],
    })

    this.Form.get('startDate')?.setValue((new Date()));
    this.Form.get('creationDate')?.setValue((new Date()));
  
  }


  checkJobLocation(){
    if(this.Form.get('locationType')?.value=="on site" || this.Form.get('locationType')?.value=="mixed")
    {
      return true ; 
    
    }
    else return false;
  }



  Getjobs(){
    
    this.JobsService.GetAlldJobs().subscribe(data=>{this.jobOffers=data;
     this.dataSource.data = this.jobOffers as JobOffers[];
       },err=>{
      console.log(err);
    })}


    
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


  AddJob(){
    
    if(this.Form.invalid){
      this.validateAllFormFields(this.Form);
    }
    else if(this.Form.valid){
    this.Form.get('requirement')?.setValue((this.Form.get('requirement')?.value).split(','));
    this.JobsService.PostJob(this.Form.value)
      .subscribe(
        res => 
      { 
      console.log(res);
      this.closeDialog();
      Swal.fire({
        title: 'Job offers created successufly',
        icon:'success',
        confirmButtonColor: '#07294d'
         })
      this.Getjobs();
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
  


  closeDialog() {
    this.dialogRef.close(false);
   
  }

  
  Reset() {
    this.Form.reset(); 
}

public hasError = (controlName: string, errorName: string) =>{
  
  return this.Form.controls[controlName].invalid ;
}




}

