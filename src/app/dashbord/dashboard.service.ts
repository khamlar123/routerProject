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

  addPos(model: any):Observable<any>{
    return this.http.post<any>(this.url + 'positions/add-positions', model).pipe(take(1));
  }

  deletePos(id:number):Observable<any>{
    return this.http.delete<any>(this.url + 'positions/'+id.toString()).pipe(take(1));
  }

  updatePos(model: any):Observable<any>{
    return this.http.put<any>(this.url + 'positions/edit-positions', model).pipe(take(1));
  }

  getStaff():Observable<any>{
    return this.http.get<any>(this.url + 'staff/get-staff').pipe(take(1));
  }

  addStaff(model : any):Observable<any>{
    return this.http.post<any>(this.url + 'staff/add-staff', model).pipe(take(1));
  }

  updateStaff(model: any):Observable<any>{
    return this.http.put<any>(this.url + 'staff/edit-staff', model).pipe(take(1));
  }

  deleteStaff(id: number):Observable<any>{
    return this.http.delete<any>(this.url + 'staff/'+id.toString()).pipe(take(1));
  }

  getSup():Observable<any>{
    return this.http.get<any>(this.url + 'suppliers/get-suppliers').pipe(take(1));
  }

  addSup(model : any):Observable<any>{
    return this.http.post<any>(this.url + 'suppliers/add-suppliers', model).pipe(take(1));
  }

  deleteSup(id: number):Observable<any>{
    return this.http.delete<any>(this.url + 'suppliers/'+id.toString()).pipe(take(1));
  }

  updateSup(model: any):Observable<any>{
    return this.http.put<any>(this.url + 'suppliers/edit-suppliers', model).pipe(take(1));
  }

  getUser():Observable<any>{
    return this.http.get<any>(this.url + 'user/get-user').pipe(take(1));
  }

  addUser(model: any):Observable<any>{
    return this.http.post<any>(this.url + 'user/add-user', model).pipe(take(1));
  }

  deleteUser(id: number):Observable<any>{
    return this.http.delete<any>(this.url + 'user/'+id.toString()).pipe(take(1));
  }

  updateUser(model: any):Observable<any>{
    return this.http.put<any>(this.url + 'user/edit-user', model).pipe(take(1));
  }


}
