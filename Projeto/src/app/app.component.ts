import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto';
  myNumber: number = 0;

  onChangeNumber (): void {
    this.myNumber = Math.floor(Math.random() * 10);
  }
}
