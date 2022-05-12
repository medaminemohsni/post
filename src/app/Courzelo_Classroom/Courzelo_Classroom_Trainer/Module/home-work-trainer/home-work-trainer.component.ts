import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainee/Shared/entities/Formation';

@Component({
  selector: 'app-home-work-trainer',
  templateUrl: './home-work-trainer.component.html',
  styleUrls: ['./home-work-trainer.component.css']
})
export class HomeWorkTrainerComponent implements OnInit {

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }


  constructor(private observer: BreakpointObserver) { }
  formation!:Formation[]
  formationDetail!:Formation
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  ngOnInit(): void {
  }

}
