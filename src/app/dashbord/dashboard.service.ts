import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 private url = 'http://localhost:3030/api/'
  constructor(
    private http: HttpClient
  ) { }

  getEquipments(): Observable<any> {
    return this.http.get<any>(this.url + 'equipments/get-equipments').pipe(take(1));
  }

  deleteEqu(id: number): Observable<any>{
    return this.http.delete<any>(this.url + 'equipments/'+id.toString()).pipe(take(1));
  }

  addEqu(model: any): Observable<any>{
    return this.http.post<any>(this.url + 'equipments/'+ 'add-equipments', model).pipe(take(1));
  }

  getAllCate(): Observable<any>{
    return this.http.get<any>(this.url + 'categories/get-categories').pipe(take(1));
  }

  getAllUnit(): Observable<any>{
    return this.http.get<any>(this.url + 'unit/get-unit').pipe(take(1));
  }

  updateEqu(model: any): Observable<any>{
    return this.http.put<any>(this.url + 'equipments/edit-equipments', model).pipe(take(1));
  }


  getPos():Observable<any>{
    return this.http.get<any>(this.url + 'positions/get-positions').pipe(take(1));
  }


  addUnit(model: {unit_name: string}):Observable<any>{
    return this.http.post<any>(this.url + 'unit/add-unit', model).pipe(take(1));
  }

  deleteUnit(id:number):Observable<any>{
    return this.http.delete<any>(this.url + 'unit/'+id.toString()).pipe(take(1));
  }

  updateUnit(model:{id:number, unit_name: string}):Observable<any>{
    return this.http.put<any>(this.url + 'unit/edit-unit', model).pipe(take(1));
  }

  addCate(model: {id: number, cate_name: string}):Observable<any>{
    return this.http.post<any>(this.url + 'categories/add-categories', model).pipe(take(1));
  }

  deleteCate(id:number):Observable<any>{
    return this.http.delete<any>(this.url + 'categories/'+id.toString()).pipe(take(1));
  }

  updateCate(model: {id: number, cate_name: string}):Observable<any>{
    return this.http.put<any>(this.url + 'categories/edit-categories', model).pipe(take(1));
  }

}
