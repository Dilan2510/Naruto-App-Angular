import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // CONSUMO API DE PERSOANJES
  public getAll(params: any): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/character', {
      params,
    });
  }
  // CONSUMO API DE CLANES
  public getAllClans(params: any): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/clan', {
      params,
    });
  }
  public getAllClansById(id: string): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/clan/' + id);
  }

  // CONSUMO API DE ALDEAS
  public GetAllVillages(params: any): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/village', { params });
  }
  public getAllVillagesById(id: string): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/village/' + id);
  }
  // CONSUMO API Kekkei Genkai
  public getAllGenkai(params: any): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/kekkei-genkai', { params });
  }
  public getAllGenkaiById(id: string): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/kekkei-genkai/' + id);
  }
  public getAllBeast(params: any): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/tailed-beast', { params });
  }
  public getAllTeams(params: any): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/team', { params });
  }
  public getAllTeamsById(id: string): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/team/' + id);
  }
  public getAllKara(params: any): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/kara', { params });
  }
  public getAllKaraById(id: string): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/kara/' + id);
  }
  public getAllAkatsuki(params: any): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/akatsuki', { params });
  }
  public getAllAkatsukiById(id: string): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/akatsuki/' + id);
  }
}
