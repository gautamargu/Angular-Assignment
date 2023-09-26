import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';
  private baseUrl = 'http://localhost:3000/people';
  

  constructor(private http:HttpClient) { }

  getPosts(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/people`);
  }
  getDataById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }

  postData(data: any) {
    return this.http.post<any>(
      this.baseUrl ,
      data
    );
  }
}
