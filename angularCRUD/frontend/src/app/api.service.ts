import { Injectable } from '@angular/core';
import { User } from './models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// observabale este o promisiune care detecteaza cand trimite/primim date si se declanseaza singur. Seamana cu un Ajaz async dar este m ai mult o promisiune

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  createdUser: any;
  updateUser(id: number, value: User) {
    throw new Error('Method not implemented.');
  }
  NODE_API_SERVER="http://localhost:3002/users";

  constructor(private HttpClient: HttpClient) { }
  
  readUsers(): Observable<User[]>{
    return this.HttpClient.get<User[]>(`${this.NODE_API_SERVER}`);
  }
  // metoda mea o sa returneze o promisiune obervable de tip user
  createUser(user:User): Observable<User[]>{
    return this.HttpClient.post<User[]>(`${this.NODE_API_SERVER}`, user);
  }
}
