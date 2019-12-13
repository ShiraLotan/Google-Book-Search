import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url: any = 'https://www.googleapis.com/books/v1/volumes?q=';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) { }

  searchingValue(word: string): Observable<any> {
    return this.http.get(this.url + word + 'intitle');
  }

}
