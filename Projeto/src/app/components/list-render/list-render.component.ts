import { Component, OnInit } from '@angular/core';
import { Animal } from '../../interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [];

  constructor(private listService: ListService) {
    this.getAnimals();
   }

  ngOnInit(): void {
  }

  removerAnimal(animal: Animal): void {
    this.animals = this.listService.remove(this.animals, animal);

  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
