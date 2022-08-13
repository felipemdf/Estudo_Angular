import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animais: Animal[], animal: Animal): Animal[] {
    return animais.filter((ani) => animal.name != ani.name);
  }
}
