import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs';
import { Formation } from '../../Shared/entities/Formation';
import { FormationService } from '../../Shared/services/formation.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-espace-formation',
  templateUrl: './espace-formation.component.html',
  styleUrls: ['./espace-formation.component.css']

})

export class EspaceFormationComponent implements OnInit {
    formation!:Formation[]

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    sidenav!: MatSidenav;
    isExpanded=true;
   
    pageSizeOptions: number[] = [5, 10, 25, 100];
    pageEvent!: PageEvent;
    datasource!: null;
    pageIndex!:number;
    pageSize!:number;
    length!:number;
  
   
  constructor(private observer: BreakpointObserver,private formationService:FormationService) {  }


  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }


  ngOnInit(): void {
    this.formationService.getFormationsByIdStudent(3).subscribe(
      data => { this.formation = data;
      console.log(this.formation)
      },
      error => { console.log("error"); });
  }
  
  

}
