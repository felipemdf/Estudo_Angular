import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../interfaces/Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals' 

  constructor(private http: HttpClient) { }

  remove(animais: Animal[], animal: Animal): Animal[] {
    return animais.filter((ani) => animal.name != ani.name);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }
}
