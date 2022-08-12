import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EventosComponent } from './components/eventos/eventos.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DirectivesComponent,
    EventosComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
