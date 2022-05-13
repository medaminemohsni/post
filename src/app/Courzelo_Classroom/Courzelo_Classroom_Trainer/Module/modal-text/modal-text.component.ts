import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainee/Shared/entities/Section';
import { SectionService } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainee/Shared/services/section.service';

@Component({
  selector: 'app-modal-text',
  templateUrl: './modal-text.component.html',
  styleUrls: ['./modal-text.component.css']
})
export class ModalTextComponent implements OnInit {
section!:Section
  constructor(private sectionService:SectionService) { }

  ngOnInit(): void {
    
  }
  updateSection(){
    let id=localStorage.getItem('idSection')
    this.sectionService.UpdateSection(id,this.section).subscribe(res=>{

    })
  }

}
