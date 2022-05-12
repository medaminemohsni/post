import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Formation } from '../entities/Formation';
import { User } from '../../Shared/entities/User';
import { Inscription } from '../../Shared/entities/Inscription';
const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'mon-entete-personnalise':'maValeur'
  })};

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(protected httpClient: HttpClient) {  }

  getAllFormations() {

    return this.httpClient.get<Formation[]>("http://localhost:8088/api/Formations");
  }
  getFormationsById(id:any) {

    return this.httpClient.get<Formation>("http://localhost:8088/api/Formations/"+id);

  }
  getFormationsByTest(test:Boolean,id:any) {

    return this.httpClient.get<Formation[]>("http://localhost:8088/api/Formations/coursA/"+test+"/user/"+id);

  }
  addFormations(id:any,formation:Formation) {

    return this.httpClient.post("http://localhost:8088/api/Formations/"+id,formation);

  }
  UpdateFormations(id:any,formation:Formation) {

    return this.httpClient.put("http://localhost:8088/api/Formations/"+id,formation);

  }
  getFormationsByIdStudent(id:any) {

    return this.httpClient.get<Formation[]>("http://localhost:8088/api/Formations/student/"+id);

  }
  getFormationsByIdCreator(id:any) {

    return this.httpClient.get<Formation[]>("http://localhost:8088/api/Formations/creator/"+id);

  }
  deleteFormationsById(id:any) {

    return this.httpClient.delete("http://localhost:8088/api/Formations/"+id);

  }
  getUserById(id:any) {

    return this.httpClient.get<User>("http://localhost:8088/api/User/"+id);
  }
  Inscription(idEtudiant:any,idFormation:any,inscription:Inscription) {

    return this.httpClient.post("http://localhost:8088/api/Inscriptions/"+idEtudiant+"/Formation/"+idFormation,inscription);
  }


}
