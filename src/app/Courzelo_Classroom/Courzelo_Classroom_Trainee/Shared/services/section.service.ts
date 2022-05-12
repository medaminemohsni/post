import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Section } from '../entities/Section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  
  constructor(protected httpClient: HttpClient) {  }

  addSection(id:any,section:Section) {

    return this.httpClient.post("http://localhost:8088/api/Sections/"+id,section);

  }
  getSectionById(id:any) {

    return this.httpClient.get<Section[]>("http://localhost:8088/api/Sections/formation/"+id);

  }
  UpdateSection(id:any,section:Section) {

    return this.httpClient.put("http://localhost:8088/api/Sections/updateName/"+id,section);

  }
}
