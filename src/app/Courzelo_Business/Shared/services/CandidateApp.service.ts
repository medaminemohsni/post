import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {AppState, CandidateApp} from '../entities/CandidateApp'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CandidateAppService {
   private baseUrl:string; 
  
  constructor(private http: HttpClient) {

    this.baseUrl='https://candidateapp-application.herokuapp.com/CandidateApp';
  }
 

  public GetAlldApps():Observable<CandidateApp[]> {
    return this.http.get<[CandidateApp]>(this.baseUrl)
  }


  public GetApplicationByJob(idJob:any ) {
    return this.http.get<[CandidateApp]>(this.baseUrl+"/byJob/"+idJob); 
  }


  public GetCurrentState(idApp:any) {
    return this.http.get<AppState>(this.baseUrl+"/currentState/"+idApp); 
  }

  public PostApp(app: any,idJob:any ) {
    return this.http.post(this.baseUrl+"/"+idJob,app); 
  }
  
  
  

}
