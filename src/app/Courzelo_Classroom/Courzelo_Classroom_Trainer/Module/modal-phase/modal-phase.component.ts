import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Phase } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainee/Shared/entities/Phase';
import { PhaseService } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainee/Shared/services/phase.service';


@Component({
  selector: 'app-modal-phase',
  templateUrl: './modal-phase.component.html',
  styleUrls: ['./modal-phase.component.css']
})
export class ModalPhaseComponent implements OnInit {
phase!:Phase
  constructor(public router: Router, private route: ActivatedRoute, private diag: MatDialog,  public dialogRef: MatDialogRef<ModalPhaseComponent>,private servicePhase:PhaseService) { }

  ngOnInit(): void {
  }
addPhase(){
  let id=localStorage.getItem("idFormation1")
this.servicePhase.addPhase(id,this.phase).subscribe(res=>{
  

})
}

}
