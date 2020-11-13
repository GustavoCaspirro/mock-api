import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teams } from './teams.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  params = 'params'

  constructor(private http: HttpClient) { }

  get(): Observable<Teams[]> {
    let params = new HttpParams().set('params', this.params);

    return this.http
      .get<Teams[]>(`/api/teams`, { params: params });
  };
}
