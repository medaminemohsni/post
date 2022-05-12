import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainee/Shared/entities/Post';
import { PostService } from 'src/app/Courzelo_Classroom/Courzelo_Classroom_Trainee/Shared/services/post.service';

@Component({
  selector: 'app-modal-update-post',
  templateUrl: './modal-update-post.component.html',
  styleUrls: ['./modal-update-post.component.css']
})
export class ModalUpdatePostComponent implements OnInit {
  post =new Post()
  posts!:Post[]
  selectedFile!:File
  privateEtat!:any
  comment!:any
  important!:any
  v!:any
  test=false
  post2!:Post
  
  color: ThemePalette = 'accent';
    checked = false;
    disabled = false;
  
  file = new File(["images"], "images.png", {
    type: "image/png",
  });
    constructor(private postService:PostService,private diag: MatDialog) { }
  
    ngOnInit(): void {
      let id= localStorage.getItem("idPost")
      let idF= localStorage.getItem("idFormation1")
      this.v="primary"
      this.postService.getPostsById(id).subscribe(res=>{
        this.post=res
        console.log("jjjjjjjjjjjjjjjj",this.post)
      })
      this.postService.getPostsByIdFormation(idF).subscribe(res=>{
  this.posts=res
      })
    }
    public onFileChanged(event:any) {
      //Select File
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
    UpdatePost(){
      let id= localStorage.getItem("idFormation")
      const uploadImageData = new FormData();
      this.post.stateprivate=this.privateEtat
      this.post.comment=this.comment
      this.post.important=this.important
      const user=this.post;
      console.log('kkkkkk',user)
      if(this.selectedFile==null){
      uploadImageData.append('imageFile',this.file );}
      else {
        uploadImageData.append('imageFile',this.selectedFile );
      }
      uploadImageData.append('user',JSON.stringify(user));
     
      this.postService.UpdatePost(this.post.idPost,uploadImageData).subscribe(res=>{
      console.log(uploadImageData)
      console.log("kkkkkkkkkkkkkkkkkkkkkkk",this.important)
  
  window.location.reload()
      })
  
    }
  
    deletePost(id:any){
      this.postService.deletePostById(id).subscribe(res=>{
        window.location.reload()
      })
    }
    
    AddPostDialog() {
      
      const diagref = this.diag.open(ModalUpdatePostComponent, {
        width: '900px',
        height: '600px',
        
       
        disableClose: true,
      }) .afterClosed().subscribe((res => {
        this.ngOnInit
      }));;
     
      
    }
    uploadFile(){
      this.test=!this.test
    }
  
  }
  