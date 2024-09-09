import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getAll(params: any): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/character', {
      params,
    });
  }

  public getAllClans(params: any): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/clan', {
      params,
    });
  }

  public getAllClansById(id: string): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/clan/' + id);
  }

  public GetAllVillages(params: any): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/village', { params });
  }
  public getAllVillagesById(id: string): Observable<any> {
    return this.http.get('https://narutodb.xyz/api/village/' + id);
  }
}
