import { Component, OnInit } from '@angular/core';
import { Animal } from '../../interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals = [
    { name: "Bob", type: "dog" },
    { name: "Tom", type: "cat" },
    { name: "Lilica", type: "Dog" }
  ]

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  removerAnimal(animal: Animal): void {
    this.animals = this.listService.remove(this.animals, animal);

  }
}
