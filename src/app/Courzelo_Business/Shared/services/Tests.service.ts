import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question, Tests } from '../entities/Tests';


@Injectable({
  providedIn: 'root'
})
export class TestsService {
   private baseUrl:string; 
  
  constructor(private http: HttpClient) {

    this.baseUrl='https://tests-application.herokuapp.com/Tests';
  }
  public GetAlldTests():Observable<Tests[]> {
    return this.http.get<[Tests]>(this.baseUrl)
  }


  public PostTest( test: Tests) :Observable<Tests>{
    return this.http.post<Tests>(this.baseUrl ,test); 
  }

  public PutTest(idTest:any ,test: Tests):Observable<Tests> {
    return this.http.put<Tests>(this.baseUrl +"/"+idTest, test);
  }

  public DeleteTest(idTest:any) {
    return this.http.delete(this.baseUrl +"/"+idTest);
  } 


  public AddQuestion( idTest: any,q:Question) {
    return this.http.post(this.baseUrl+"/Questions/"+idTest ,q); 
  }

  public GetQuestions( idTest: any):Observable<Question[]> {
    return this.http.get<[Question]>(this.baseUrl +"/Questions/" + idTest); 
  }

  public DeleteQuestions( idTest: any ,questionId:any) {
    return this.http.delete(this.baseUrl +"/Questions/" + idTest +"/"+questionId ); 
  }

}
