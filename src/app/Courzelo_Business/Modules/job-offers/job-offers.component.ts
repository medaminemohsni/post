import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { JobOffers } from '../../Shared/entities/JobOffers';
import { JobOffersService } from '../../Shared/services/JobOffers.service';
import { AddJobDialogComponent } from '../add-job-dialog/add-job-dialog.component';
import { UpdJobDialogComponent } from '../upd-job-dialog/upd-job-dialog.component';
import Swal from "sweetalert2";

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit,AfterViewInit {

  jobOffers!: JobOffers[];
  public dataSource= new  MatTableDataSource<JobOffers>();
  displayedColumns = ['title', 'creationDate', 'state', 'locationType','location','requirement', 'salary','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  
  constructor(private _liveAnnouncer: LiveAnnouncer,private JobsService:JobOffersService,private diag: MatDialog) { }

  ngOnInit(): void {
    this.Getjobs();
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  

  SortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


  public doFilter = (value: string) => {
   
    this.dataSource.filter = value.trim().toLocaleLowerCase();

  }
    
  Getjobs(){
    
    this.JobsService.GetAlldJobs().subscribe(data=>{this.jobOffers=data;
     this.dataSource.data = this.jobOffers as JobOffers[];
       },err=>{
      console.log(err);
    })}


    AddJobDialog() {
    
      const diagref = this.diag.open(AddJobDialogComponent, {
        width: '900px',
        height: '750px',
        
       
        disableClose: true,
      }) .afterClosed().subscribe((res => {
        this.Getjobs();
      }));;
     
      
    }



    UpdJob(msg:any){
      const newMsg = Object.assign({}, msg);
      console.log(msg);
         const diagref = this.diag.open(UpdJobDialogComponent, {
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
    DeleteJob( id:number){
      Swal.fire({
        title: 'Are u sure ?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        confirmButtonColor: '#07294d',
        cancelButtonColor: '#d33',
        showCancelButton: true,
        confirmButtonText: 'Sure',
      }).then((result) => {
        if (result.isConfirmed) {
          this.JobsService.Delete(id).subscribe(result => {  this.Getjobs(); 
            Swal.fire({
              title: 'Job offers deleted successfully',
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
           });
          
        }
      })

      


        }


}


