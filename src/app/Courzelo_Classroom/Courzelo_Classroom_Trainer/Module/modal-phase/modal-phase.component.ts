import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-modal-phase',
  templateUrl: './modal-phase.component.html',
  styleUrls: ['./modal-phase.component.css']
})
export class ModalPhaseComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute, private diag: MatDialog,  public dialogRef: MatDialogRef<ModalPhaseComponent>) { }

  ngOnInit(): void {
  }

}
