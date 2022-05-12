import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs';
import { Formation } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainee/Shared/entities/Formation';
import { FormationService } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainee/Shared/services/formation.service';
import { ModalCoursesTrainerComponent } from '../modal-courses-trainer/modal-courses-trainer.component';

@Component({
  selector: 'app-archived-courses-trainer',
  templateUrl: './archived-courses-trainer.component.html',
  styleUrls: ['./archived-courses-trainer.component.css']
})
export class ArchivedCoursesTrainerComponent implements OnInit {

  formation!:Formation[]
  @ViewChild (MatSidenav)
  sidenav!: MatSidenav;
  isExpanded=true;
  isChecked = true;
  formGroup!: FormGroup;

    // MatPaginator Inputs

    pageSizeOptions: number[] = [5, 10, 25, 100];
    pageEvent!: PageEvent;
datasource!: null;
pageIndex!:number;
pageSize!:number;
length!:number;

  constructor(formBuilder: FormBuilder,private observer: BreakpointObserver,private formationService:FormationService,private diag: MatDialog) {
    this.formGroup = formBuilder.group({
      enableWifi: '',
      acceptTerms: ['', Validators.requiredTrue],
    });
  }


  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }




  ngOnInit(): void {
    localStorage.setItem("e","0");
    localStorage.removeItem("idFormation1")

    this.formationService.getFormationsByTest(false,3).subscribe(
      data => { this.formation = data;

      },

      error => { console.log("error"); });
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
      AddcoursesDialog() {
        localStorage.setItem("e","0")
        const diagref = this.diag.open(ModalCoursesTrainerComponent, {
          width: '900px',
          height: '700px',


          disableClose: true,
        }) .afterClosed().subscribe((res => {
          this.ngOnInit
        }));;


      }



      getIdFormation(id:any){
        localStorage.setItem("idFormation1",id)
        }
        }

