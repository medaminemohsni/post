import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CandidateApp, AppState } from '../../Shared/entities/CandidateApp';
import { JobOffers } from '../../Shared/entities/JobOffers';
import { CandidateAppService } from '../../Shared/services/CandidateApp.service';
import { JobOffersService } from '../../Shared/services/JobOffers.service';

@Component({
  selector: 'app-candidate-app',
  templateUrl: './candidate-app.component.html',
  styleUrls: ['./candidate-app.component.css']
})
export class CandidateAppComponent implements OnInit,AfterViewInit  {


  candidateApps!: CandidateApp[];
  public dataSource= new  MatTableDataSource<CandidateApp>();
  displayedColumns = ['applicationDate','candidateState','Job'];
  JobOffer!:JobOffers;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;


  constructor(private _liveAnnouncer: LiveAnnouncer,private JobsService:JobOffersService,private AppService:CandidateAppService) { }


  ngOnInit(): void {
    this.GetApps();
    
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

      
  GetApps(){
    
    this.AppService.GetAlldApps().subscribe(data=>{this.candidateApps=data;
     this.dataSource.data = this.candidateApps as CandidateApp[];
     this.candidateApps.forEach(item=> {
       if(this.getLength(item.candidateState)!=0)
        {
        if (this.getLength(item.candidateState)!=0){
          this.AppService.GetCurrentState(item.idCandidateApp).subscribe(data=>{
           item.currentState=data;
           console.log(item)  })
         }
       }

       if(item.idJob){
        this.JobsService.GetJobById(item.idJob).subscribe(res=>
          {  item.job=res;   })

        }

     })
    
     
     
    },err=>{
      console.log(err);
    })
      
  }


  getLength(obj:any)
  {
    if((obj===null)|| (obj === undefined))
      {
        return 0;
      }
      else {
        return Object.keys(obj).length;
      }
    
    
  }

 


  GetJobById(idJob:any){
    this.JobsService.GetJobById(idJob).subscribe(res=>
       {this.JobOffer=res;
      console.log(this.JobOffer);
      }
      )
  }

}
