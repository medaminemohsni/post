import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../entities/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(protected httpClient: HttpClient) { }


  addComments(id:any,idPost:any,comment:Comment) {

    return this.httpClient.post("http://localhost:8088/api/Comments/"+id+"/formation/"+idPost,comment);

  }
  getCommentsByIdPost(id:any) {

    return this.httpClient.get<Comment[]>("http://localhost:8088/api/Comments/post/"+id);

  }
  getCommentsById(id:any) {

    return this.httpClient.get<Comment>("http://localhost:8088/api/Comments/"+id);

  }
  deleteCommentById(id:any) {

    return this.httpClient.delete("http://localhost:8088/api/Comments/"+id);

  }
  UpdateComment(id:any,comment:FormData) {

    return this.httpClient.put("http://localhost:8088/api/Comments/"+id,comment);

  }
}
