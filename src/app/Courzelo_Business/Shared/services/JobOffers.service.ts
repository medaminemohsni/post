import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {JobOffers} from "../entities/JobOffers"


@Injectable({
  providedIn: 'root'
})
export class JobOffersService {
   private baseUrl:string; 
  
  constructor(private http: HttpClient) {

    this.baseUrl='https://joboffers-application.herokuapp.com/JobOffers';
  }
  public GetAlldJobs():Observable<JobOffers[]> {
    return this.http.get<[JobOffers]>(this.baseUrl)
  }
   
  
  public GetJobById(idJob:any):Observable<JobOffers> {
    return this.http.get<JobOffers>(this.baseUrl+"/"+idJob )
  }


  public PostJob( job: JobOffers) {
    return this.http.post(this.baseUrl ,job); 
  }

  public Put(idJob:any ,job: JobOffers):Observable<JobOffers> {
    return this.http.put<JobOffers>(this.baseUrl +"/"+idJob, job);
  }

  public Delete(idJob:any) {
    return this.http.delete(this.baseUrl +"/"+idJob);
  } 

}
