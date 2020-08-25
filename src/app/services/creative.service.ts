import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreativeService {

  constructor(private httpClient: HttpClient) { }

  httpcall;
  base_url = 'http://localhost:3000/';
  addtext= this.base_url+'addtextad';
  fetchcampign= this.base_url+'fetchCamapigns';

  addTextCreative(data)
  {
    this.httpcall= this.httpClient.post(this.addtext,data);
    return this.httpcall;    
  }
}
