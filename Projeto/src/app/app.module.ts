import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindComponent } from './components/two-way-bind/two-way-bind.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DirectivesComponent,
    EventosComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
