import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Interaction } from 'src/app/shared/models/interaction';
import { NewInteraction } from 'src/app/shared/models/newInteraction';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor(private http:HttpClient) { }

  getAllInteractions():Observable<Interaction[]> {
    return this.http.get(`${environment.apiUrl}${'Interaction'}`).pipe(map(resp=>resp as Interaction[]))
  }

  getInteractionDetail(id:number):Observable<Interaction> {
    return this.http.get(`${environment.apiUrl}${'Interaction/'}${id}`).pipe(map(resp=>resp as Interaction))
  }

  getInteractionByClientId(id:number):Observable<Interaction[]> {
    return this.http.get(`${environment.apiUrl}${'Interaction/Client/'}${id}`).pipe(map(resp=>resp as Interaction[]))
  }

  getInteractionByEmployeeId(id:number):Observable<Interaction[]> {
    return this.http.get(`${environment.apiUrl}${'Interaction/Employee/'}${id}`).pipe(map(resp=>resp as Interaction[]))
  }

  addInteraction(newInteraction: NewInteraction):Observable<Interaction> {
    return this.http.post(`${environment.apiUrl}${'Interaction'}`, newInteraction).pipe(map(resp=>resp as Interaction))
  }

  updateInteraction(id:number, newInteraction: NewInteraction):Observable<Interaction> {
    return this.http.put(`${environment.apiUrl}${'Interaction/'}${id}`, newInteraction).pipe(map(resp=>resp as Interaction))
  }

  deleteInteraction(id:number):Observable<Interaction> {
    return this.http.delete(`${environment.apiUrl}${'Interaction/'}${id}`).pipe(map(resp=>resp as Interaction))
  }

}