import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  
  name: string = "Felipe";
  age: number = 21;
  job: string = "Developer";

  constructor() { }

  ngOnInit(): void {
  }

}
