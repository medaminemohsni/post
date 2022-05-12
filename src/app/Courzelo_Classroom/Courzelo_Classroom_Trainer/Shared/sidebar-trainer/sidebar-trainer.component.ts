import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { FormationService } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainee/Shared/services/formation.service';
import Swal from 'sweetalert2';
import { ModalUpdateCoursesComponent } from '../../Module/modal-update-courses/modal-update-courses.component';


@Component({
  selector: 'app-sidebar-trainer',
  templateUrl: './sidebar-trainer.component.html',
  styleUrls: ['./sidebar-trainer.component.css']
})
export class SidebarTrainerComponent implements OnInit {
  @ViewChild (MatSidenav)
  sidenav!: MatSidenav;
  isExpanded=true;

  
  constructor(private observer: BreakpointObserver,private diag: MatDialog,private formationService:FormationService
,private router :Router    ) { }

  
  ngOnInit(): void {
   
  }
   toggle() {
    //this.sidenav.toggle();
    this.isExpanded = !this.isExpanded;

  }
 
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          //this.sidenav.close();
          this.isExpanded=false

        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
          this.isExpanded=true
        }
      });
  }
  
deleteFormation(){
  let id=localStorage.getItem('idFormation1')
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#07294d',
    cancelButtonColor: '#ffc600',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.formationService.deleteFormationsById(id).subscribe(res=>{
        this.router.navigate(['/coursestrainer'])
       
      })
      Swal.fire(
        'Deleted!',
        'Your course has been deleted.',
        'success'
      )
    }
  })
  

}
  AddJobDialog() {
    
    const diagref = this.diag.open(ModalUpdateCoursesComponent, {
      width: '900px',
      height: '700px',
      
     
      disableClose: true,
    }) .afterClosed().subscribe((res => {
      this.ngOnInit
    }));;
   
    
  }


}