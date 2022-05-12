import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  Form!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.Form = this.fb.group({
     
      attr: [''],
    })
  }

  }

