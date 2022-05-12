import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CourseService } from 'src/app/Courzelo_Trainer/Shared/Services/course.service';
@Component({
  selector: 'app-single-course-detail',
  templateUrl: './single-course-detail.component.html',
  styleUrls: ['./single-course-detail.component.css']
})
export class SingleCourseDetailComponent implements OnInit {
  courseID!:number;
  coursesList:any;
  course={
    courseDescription:"",
    idCourse:"",
    price:"",
    title:"",
    auteur:""
  }
  constructor(private courseService:CourseService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{ this.courseID= parseInt(params.get('id')|| '')});
    this.courseService.getCourseById(this.courseID).subscribe(
      data => {
        this.course.idCourse= data.idCourse;
        this.course.courseDescription=data.courseDescription
        this.course.price=data.price;
        this.course.title=data.title;
        this.course.auteur=data.auteur;
         },
         err => {console.log(err);}
    );
      }
}
