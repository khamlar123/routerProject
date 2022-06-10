import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, of, take } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:3030/api/login';
  constructor(
    private http: HttpClient,
  ) { }

  login(model: any): Observable<any> {
    return this.http.post<any>(this.url , model).pipe(
      take(1),
      catchError((res) => of(res))
    );
  }

}
