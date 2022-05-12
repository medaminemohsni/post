import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { JobOffers } from '../../Shared/entities/JobOffers';
import { JobOffersService } from '../../Shared/services/JobOffers.service';

import Swal from "sweetalert2";


@Component({
  selector: 'app-upd-job-dialog',
  templateUrl: './upd-job-dialog.component.html',
  styleUrls: ['./upd-job-dialog.component.css']
})
export class UpdJobDialogComponent implements OnInit {

  Form!: FormGroup;
  jobOffers!: JobOffers[];
  public dataSource= new  MatTableDataSource<JobOffers>();
  constructor(public dialogRef: MatDialogRef<UpdJobDialogComponent>,private JobsService:JobOffersService,@Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder) 
  { }

  ngOnInit(): void {

    this.Getjobs();
    this.Form = this.fb.group({
      idJob : ['', Validators.required],
      title : ['', Validators.required],
      description: ['', Validators.required],
      creationDate: ['', ],
      startDate: ['', Validators.required],
      deadlineDate: ['', Validators.required],
      state: ['', Validators.required],
      jobType: ['', Validators.required],
      locationType: ['', Validators.required],
      location: [''],
      requirement: ['', Validators.required],
      hireNumber: ['', Validators.required],
      salary: ['', Validators.required],
    })

    this.setField();

  }

  
  setField(){
    
    //console.log(this.data.message);
    this.Form.get("idJob")?.setValue(this.data.message.idJob);
    this.Form.get("title")?.setValue(this.data.message.title);
    this.Form.get("description")?.setValue(this.data.message.description);
    this.Form.get("creationDate")?.setValue(this.data.message.creationDate);
    this.Form.get("startDate")?.setValue(this.data.message.startDate);
    this.Form.get("deadlineDate")?.setValue(this.data.message.deadlineDate);
    this.Form.get("state")?.setValue(this.data.message.state);
    this.Form.get("jobType")?.setValue(this.data.message.jobType);
    this.Form.get("locationType")?.setValue(this.data.message.locationType);
    this.Form.get("location")?.setValue(this.data.message.location);
    this.Form.get("requirement")?.setValue(this.data.message.requirement);
    this.Form.get("requirement")?.setValue(this.Form.get("requirement")?.value.toString());
    this.Form.get("hireNumber")?.setValue(this.data.message.hireNumber);
    this.Form.get("salary")?.setValue(this.data.message.salary);
    console.log(this.Form.get("requirement")?.value.toString())
  }


   
  setData(){
    
    //console.log(this.data.message);
    this.data.message.idJob=this.Form.get("idJob")?.value;
    this.data.message.title=this.Form.get("title")?.value;
    this.data.message.description=this.Form.get("description")?.value;
    this.data.message.creationDate=this.Form.get("creationDate")?.value;
    this.data.message.startDate=this.Form.get("startDate")?.value;
    this.data.message.deadlineDate=this.Form.get("deadlineDate")?.value;
    this.data.message.state=this.Form.get("state")?.value;
    this.data.message.jobType=this.Form.get("jobType")?.value;
    this.data.message.locationType=this.Form.get("locationType")?.value;
    this.data.message.location=this.Form.get("location")?.value;
    this.data.message.requirement=this.Form.get("requirement")?.value.split(',');
    this.data.message.hireNumber=this.Form.get("hireNumber")?.value;
    this.data.message.salary=this.Form.get("salary")?.value;

   
  }


  
  checkJobLocation(){
    if(this.Form.get('locationType')?.value=="on site" || this.Form.get('locationType')?.value=="mixed")
    {
      return true ; 
    
    }
    else return false;
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


  updatejob() {

    if(this.Form.invalid){
      this.validateAllFormFields(this.Form);
    }
    else if(this.Form.valid){
     if (this.data.message) 
     {
        //var id=this.data.message.idJob;
        //console.log(id);
       // this.setData();
        console.log(this.data.message);
        this.setData();
        console.log(this.data.message);
        this.JobsService.Put(this.data.message.idJob,this.data.message).subscribe((res) => {
          this.closeDialog()
          //this.toastr.success("Job offer updated ! ")
          Swal.fire({
            title: 'Job offers updated successfully',
            icon:'success',
            confirmButtonColor: '#07294d'
             })
          
         
        }, (error) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! ' + error,
            
          })
      
     } )
    }
  }
  }
  
  
  

  Getjobs(){
    
    this.JobsService.GetAlldJobs().subscribe(data=>{this.jobOffers=data;
     this.dataSource.data = this.jobOffers as JobOffers[];
       },err=>{
      console.log(err);
    })}



 


  closeDialog() {
    this.dialogRef.close(false);
   
  }

  
  Reset() {
    this.Form.reset(); 
}

public hasError = (controlName: string, errorName: string) =>{
  this.Form.controls[controlName].markAllAsTouched();
  return this.Form.controls[controlName].hasError(errorName);
}




}

