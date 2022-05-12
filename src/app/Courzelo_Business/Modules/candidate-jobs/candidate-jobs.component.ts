
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppState, CandidateApp } from '../../Shared/entities/CandidateApp';
import { JobOffers } from '../../Shared/entities/JobOffers';
import { CandidateAppService } from '../../Shared/services/CandidateApp.service';
import { JobOffersService } from '../../Shared/services/JobOffers.service';
import Swal from "sweetalert2";
import { MatDialog } from '@angular/material/dialog';
import { JobDetailsComponent } from '../job-details/job-details.component';


@Component({
  selector: 'app-candidate-jobs',
  templateUrl: './candidate-jobs.component.html',
  styleUrls: ['./candidate-jobs.component.css']
})
export class CandidateJobsComponent implements OnInit {

  jobOffers!: JobOffers[];

  candidateApp!: CandidateApp[];

  public dataSource2= new  MatTableDataSource<CandidateApp>();

  state!:AppState;
  job!:JobOffers
  app=new CandidateApp(null,new Date(),null,"",[],[],this.state,this.job) ;
  
  dataSource: MatTableDataSource<JobOffers> = new MatTableDataSource<JobOffers>(this.jobOffers);

 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
 
  constructor(private JobsService:JobOffersService,private AppService:CandidateAppService,private diag: MatDialog) { }
  

  ngOnInit(): void {
    this.Getjobs();
    
    this.dataSource.paginator = this.paginator;
    
    this.GetjobsApp();

  }

  

  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    
  }
  


  Getjobs(){
    
    this.JobsService.GetAlldJobs().subscribe(data=>{this.jobOffers=data;
     this.dataSource.data = this.jobOffers as JobOffers[];
       },err=>{
      console.log(err);
    })}


    GetjobsApp(){
    
      this.AppService.GetAlldApps().subscribe(data=>{this.candidateApp=data;
       console.log(this.candidateApp);
         },err=>{
        console.log(err);
      })}
  

    AddJobApp(job:JobOffers)
    {  
      Swal.fire({
        title: 'Are u sure ?',
        html: '<b>Description : </b>' +job.description +'<br><b>Requirement :</b>'+ job.requirement ,
        icon: 'warning',
        confirmButtonColor: '#07294d',
        cancelButtonColor: '#d33',
        showCancelButton: true,
        confirmButtonText: 'Sure',
      }).then((result) => {
        if (result.isConfirmed) {
       this.app.userId=job.idJob;
       this.AppService.PostApp(this.app,job.idJob).subscribe(res => 
        { 
        //console.log(res);
        Swal.fire({
          title: 'Job application has been send successufly',
          icon:'success',
          confirmButtonColor: '#07294d'
           })
        },
        err=>
        {
          //console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! ' + err,
            
          })
        })

    }
   })


    }

    Details(msg:any){
      const newMsg = Object.assign({}, msg);
      console.log(msg);
         const diagref = this.diag.open(JobDetailsComponent, {
          width: '650px',
          height: 'auto',
        data:
        {
          message:newMsg,
        }
        })
      .afterClosed().subscribe((res => {
        this.Getjobs();
      }));;

    }

}
