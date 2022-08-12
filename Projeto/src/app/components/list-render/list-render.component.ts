import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
