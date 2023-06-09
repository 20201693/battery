import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cab } from './cab';

@Injectable({
  providedIn: 'root'
})
export class CabService {

  constructor(private http:HttpClient) { }

getAll():Observable<Cab[]>{
  return this.http.get<Cab[]>("http://localhost:3000/cab");

}

create(payload:Cab):Observable<Cab>{
  return this.http.post<Cab>("http://localhost:3000/cab",payload)
}

getbyId(id:number):Observable<Cab>{
  return this.http.get<Cab>(`http://localhost:3000/cab/${id}`
);
}

update(id: number, payload: Cab):Observable<Cab>{
  return this.http.put<Cab>(`http://localhost:3000/cab/${id}`,payload);
}

delete(id:number){
  return this.http.delete(`http://localhost:3000/cab/${id}`)
}
 

}
