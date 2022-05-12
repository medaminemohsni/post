import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Post } from '../entities/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(protected httpClient: HttpClient) { }
  
  addPosts(id:any,idFormation:any,post:FormData) {

    return this.httpClient.post("http://localhost:8088/api/Posts/"+id+"/formation/"+idFormation,post);

  }
  getPostsByIdFormation(id:any) {

    return this.httpClient.get<Post[]>("http://localhost:8088/api/Posts/formation/"+id);

  }
  getPostsById(id:any) {

    return this.httpClient.get<Post>("http://localhost:8088/api/Posts/"+id);

  }
  deletePostById(id:any) {

    return this.httpClient.delete("http://localhost:8088/api/Posts/"+id);

  }
  UpdatePost(id:any,post:FormData) {

    return this.httpClient.put("http://localhost:8088/api/Posts/"+id,post);

  }
  getPostsprivate(id:any) {

    return this.httpClient.get<Post[]>("http://localhost:8088/api/Posts/postprivate/"+id);

  }
  updatePostsprivate(id:any,test:Boolean) {

    return this.httpClient.put("http://localhost:8088/api/Posts/post/"+id+"/private/"+test,event);

  }
}
