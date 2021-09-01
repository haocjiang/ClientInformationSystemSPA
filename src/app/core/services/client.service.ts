import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/shared/models/client';
import { NewClient } from 'src/app/shared/models/newClient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAllClients():Observable<Client[]> {
    return this.http.get(`${environment.apiUrl}${'Client'}`).pipe(map(resp=>resp as Client[]))
  }
  
  getClientDetail(id:number): Observable<Client> {
    return this.http.get(`${environment.apiUrl}${'Client/'}${id}`).pipe(map(resp=>resp as Client))
  }

  addClient(newclient:NewClient) : Observable<Client> {
    return this.http.post(`${environment.apiUrl}${'Client'}`, newclient).pipe(map(resp=>resp as Client))
  }

  updateClient(id:number, newclient:NewClient):Observable<Client> {
    return this.http.put(`${environment.apiUrl}${'Client/'}${id}`, newclient).pipe(map(resp=>resp as Client))
  }

  deleteClient(id:number): Observable<Client> {
    return this.http.delete(`${environment.apiUrl}${'Client/'}${id}`).pipe(map(resp=>resp as Client))
  }

}