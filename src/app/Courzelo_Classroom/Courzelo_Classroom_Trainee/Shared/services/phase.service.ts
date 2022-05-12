import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phase } from '../entities/Phase';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  constructor(protected httpClient: HttpClient) { }

  addPhase(id:any,phase:Phase) {

    return this.httpClient.post("http://localhost:8088/api/Phases/"+id,phase);

  }
  getPhaseById(id:any) {

    return this.httpClient.get<Phase[]>("http://localhost:8088/api/Phases/section/"+id);

  }
  UpdateSection(id:any,phase:Phase) {

    return this.httpClient.put("http://localhost:8088/api/Phases/updateName/"+id,phase);

  }
}
