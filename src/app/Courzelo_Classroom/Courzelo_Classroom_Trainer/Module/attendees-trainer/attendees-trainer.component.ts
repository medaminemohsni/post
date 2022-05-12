import { Component, OnInit } from '@angular/core';


export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-attendees-trainer',
  templateUrl: './attendees-trainer.component.html',
  styleUrls: ['./attendees-trainer.component.css']
})
export class AttendeesTrainerComponent implements OnInit {
  
  
 
  folders: Section[] = [
    {
      name: 'Mohamed Amine Mohsni',
      updated: new Date('1/1/16'),
    },
    
  ];
  notes: Section[] = [
    {
      name: 'Bilel Merhben',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Asma Chebbi',
      updated: new Date('1/18/16'),
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
