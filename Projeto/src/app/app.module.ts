import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
<<<<<<< HEAD
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
=======
>>>>>>> parent of 4ed8a58 (adiciona a passagem de dados entre componentes)

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent
=======
    FirstComponentComponent
>>>>>>> parent of 4ed8a58 (adiciona a passagem de dados entre componentes)
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
