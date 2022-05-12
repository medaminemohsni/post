import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Form!: FormGroup;

  @Output() getLogged: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  
  ngOnInit(): void {
 
    this.Form = this.fb.group({
     
      companyName: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      activity: ['', Validators.required],
      employeesNb: ['', Validators.required], 
    })
  }

  Send(){
    
    console.log(this.Form.get('companyName')?.value);
    
  }

}
