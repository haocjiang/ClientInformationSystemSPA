import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from 'src/app/shared/models/employee';
import { NewEmployee } from 'src/app/shared/models/newEmployee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<Employee[]> {
    return this.http.get(`${environment.apiUrl}${'Employee'}`).pipe(map(resp=>resp as Employee[]))
  }

  getEmployeeDetail(id:number):Observable<Employee> {
    return this.http.get(`${environment.apiUrl}${'Employee/'}${id}`).pipe(map(resp=>resp as Employee))
  }

  addEmployee(newEmployee:NewEmployee):Observable<Employee> {
    return this.http.post(`${environment.apiUrl}${'Employee'}`, newEmployee).pipe(map(resp=>resp as Employee))
  }

  updateEmployee(id:number, newEmployee:NewEmployee) :Observable<Employee> {
    return this.http.put(`${environment.apiUrl}${'Employee/'}${id}`, newEmployee).pipe(map(resp=>resp as Employee))
  }

  deleteEmployee(id:number):Observable<Employee> {
    return this.http.delete(`${environment.apiUrl}${'Employee/'}${id}`).pipe(map(resp=>resp as Employee))
  }

}