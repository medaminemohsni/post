import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-business-login',
  templateUrl: './business-login.component.html',
  styleUrls: ['./business-login.component.css']
})
export class BusinessLoginComponent implements OnInit {

  Form!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
     
      
      email: ['', Validators.required],
      password: ['', Validators.required],
      
    })
  }


  
public hasError = (controlName: string, errorName: string) =>{
  
  return this.Form.controls[controlName].invalid ;
}


login(){
  
}

}
