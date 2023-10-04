import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ListPizzasComponent } from './list-pizzas/list-pizzas.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    ListPizzasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
