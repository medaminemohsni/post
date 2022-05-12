import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Tests } from '../../Shared/entities/Tests';
import { TestsService } from '../../Shared/services/Tests.service';
import Swal from "sweetalert2";


@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit,AfterViewInit  {

  tests!: Tests[];
  public dataSource= new  MatTableDataSource<Tests>();
  displayedColumns = ['title', 'creationDate', 'type','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  
  constructor(private _liveAnnouncer: LiveAnnouncer,private testsService:TestsService) { }


  ngOnInit(): void {
    this.GetTests();
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
    

     
  GetTests(){
    
    this.testsService.GetAlldTests().subscribe(data=>{this.tests=data;
     this.dataSource.data = this.tests as Tests[];
       },err=>{
      console.log(err);
    })}

  
    /*AddTestDialog(){
      const diagref = this.diag.open(AddTestDialogComponent, {
        width: '800px',
        height: '650px',
        
       
        disableClose: true,
      }) .afterClosed().subscribe((res => {
        this.GetTests();
      }));;
    }*/

    /*UpdTest(msg:any){
      const newMsg = Object.assign({}, msg);
      console.log(msg);
         const diagref = this.diag.open(QuestionsComponent, {
          width: '650px',
          height: '500px',
        data:
        {
          message:newMsg,
        }
        })
      .afterClosed().subscribe((res => {
        this.GetTests();
      }));;
      
            


    }*/

    DeleteTest(idTest:any){

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
          this.testsService.DeleteTest(idTest).subscribe(result => {  this.GetTests(); 
            Swal.fire({
              title: 'Test deleted successufly',
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

