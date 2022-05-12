import { Component, OnInit, ViewChild } from '@angular/core';
import { Formation } from '../../Shared/entities/Formation';
import { FormationService } from '../../Shared/services/formation.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs';
import { Section } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainer/Module/attendees-trainer/attendees-trainer.component';
import { ThemePalette } from '@angular/material/core';
import { Post } from '../../Shared/entities/Post';
import { MatDialog } from '@angular/material/dialog';

import { PostService } from '../../Shared/services/post.service';
import { ModalUpdatePostComponent } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainer/Module/modal-update-post/modal-update-post.component';
import { Comment } from '../../Shared/entities/Comment';
import { CommentService } from '../../Shared/services/comment.service';


@Component({
  selector: 'app-myclasses',
  templateUrl: './myclasses.component.html',
  styleUrls: ['./myclasses.component.css']
})
export class MyclassesComponent implements OnInit {
  post =new Post()
  posts!:Post[]
  test11!:any
  selectedFile!:File
  privateEtat!:any
  comment!:any
  important!:any
  v!:any
  user!:any
  retrievedImage: any;
  test=false
  base64Data:any; 
  commentA =new Comment()
  comments!:Comment[]
  test1!:any
  valueTest!:any
  color: ThemePalette = 'accent';
    checked = false;
    disabled = false;

    file = new File(["images"], "images.png", {
      type: "image/png",
    });


  constructor(private postService:PostService,private userService:FormationService,private diag: MatDialog, private commentService:CommentService) { }
 
  ngOnInit(): void {

    this.v="primary"
    let id =localStorage.getItem("idFormation1")
    this.postService.getPostsprivate(id).subscribe(res=>{
this.posts=res


          this.retrievedImage = 'data:image/jpeg;base64,';
    console.log(this.retrievedImage)
    })
  }
  public onFileChanged(event:any) {
    //Select File
    this.valueTest=true
    this.selectedFile = event.target.files[0];
    
  }
  public onFileChanged2(event:any) {
    //Select File
    this.valueTest=false
    this.selectedFile = event.target.files[0];
    
  }
  onValChange(value:any){
    this.privateEtat=value.checked 
}
onValChange1(value:any){
  this.comment=value.checked 
}
onValChange3(value:any){
  this.important=value.checked 
}

  addPost(){
    let idF= localStorage.getItem("idFormation1")
    const uploadImageData = new FormData();
    this.post.stateprivate=this.privateEtat
    this.post.comment=this.comment
    this.post.important=this.important
    this.post.test=this.valueTest
    const user=this.post;
    console.log('kkkkkk',user)
    if(this.selectedFile==null){
    uploadImageData.append('imageFile',this.file );}
    else {
      uploadImageData.append('imageFile',this.selectedFile );
    }
    uploadImageData.append('user',JSON.stringify(user));
   
    this.postService.addPosts(3,idF,uploadImageData).subscribe(res=>{
    console.log(uploadImageData)
    console.log("kkkkkkkkkkkkkkkkkkkkkkk",this.post)

window.location.reload()
    })

  }

  deletePost(id:any){
    this.postService.deletePostById(id).subscribe(res=>{
      window.location.reload()
    })
  }
  
  AddPostDialog(id:any) {
  localStorage.setItem("idPost",id);
    const diagref = this.diag.open(ModalUpdatePostComponent, {
      width: '700px',
      height: '600px',
      
     
      disableClose: true,
    }) .afterClosed().subscribe((res => {
      this.ngOnInit
    }));;
   
    
  }
  uploadFile(){
    this.test=!this.test
  }
  uploadFile1(){
    this.test11=!this.test11
  }

getComment(id:any){
 
  this.commentService.getCommentsByIdPost(id).subscribe(res=>{
    this.comments=res
    this.getComment(id)
    this.userService.getUserById(3).subscribe(res=>{
      this.user=res
    })
  })
}

  addComment(id:any)
  {

    this.commentService.addComments(3,id,this.commentA).subscribe(res=>{
    
    console.log("kkkkkkkkkkkkkkkkkkkkkkk",this.commentA)

    })
  }
}