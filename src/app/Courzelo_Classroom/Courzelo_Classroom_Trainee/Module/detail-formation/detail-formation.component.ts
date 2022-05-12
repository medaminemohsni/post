import { Component, Inject, OnInit } from '@angular/core';
import { Formation } from '../../Shared/entities/Formation';
import { FormationService } from '../../Shared/services/formation.service';
import { User } from '../../Shared/entities/User';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.css']
})
export class DetailFormationComponent implements OnInit {

  constructor(private formationDetailService:FormationService,) { }
  animal!: string;
  name!: string;
  formationDetail!:Formation
  title!:any
  duaration!:any
  price!:any
  quizzes!:any
  category!:any
  leactures!:any
  students!:number
  description!:String
  user!:User
  nameUser!:any
  desUser!:any
  ngOnInit(): void {
    
     let id= localStorage.getItem("idFormation")
      this.formationDetailService.getFormationsById(id).subscribe(
        data => { this.formationDetail = data;
          this.title=this.formationDetail.coursename;
         this.duaration= this.formationDetail.date
         this.price=this.formationDetail.price
         this.category=this.formationDetail.category
         
        
         this.description=this.formationDetail.descriptioncourse
         this.formationDetailService.getUserById(this.formationDetail.instructorname).subscribe(
           dataUser=>{this.user=dataUser
this.nameUser=this.user.name
this.desUser=this.user.description
           }
           
         )
        console.log(this.formationDetail)
        },
  
        error => { console.log("error"); });
  
    
  
    
  }
}

