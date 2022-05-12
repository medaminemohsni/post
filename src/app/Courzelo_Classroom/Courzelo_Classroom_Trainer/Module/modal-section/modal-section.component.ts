import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Section } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainee/Shared/entities/Section';
import { SectionService } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainee/Shared/services/section.service';

@Component({
  selector: 'app-modal-section',
  templateUrl: './modal-section.component.html',
  styleUrls: ['./modal-section.component.css']
})
export class ModalSectionComponent implements OnInit {
  section=new Section()
  constructor(public router: Router, private route: ActivatedRoute,private sectionService:SectionService, private diag: MatDialog,  public dialogRef: MatDialogRef<ModalSectionComponent>) { }

  ngOnInit(): void {
  }

  addSection(){
    let id=localStorage.getItem("idFormation1")
    this.sectionService.addSection(id,this.section).subscribe(res=>{
  
    })
  }

}
