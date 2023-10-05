import { Component } from '@angular/core';
import { Pizza } from '../pizza';
import { Commentaire } from '../commentaire';

@Component({
  selector: 'moh-list-pizzas',
  templateUrl: './list-pizzas.component.html',
  styleUrls: ['./list-pizzas.component.css'],
})
export class ListPizzasComponent {
  // lespizzas: Pizza[] = [
  //   new Pizza('Neptune', 'assets/neptune.jpg', 8.7, true),
  //   new Pizza('4 Saisons', 'assets/saisons.jpg', 8.2, false),
  //   new Pizza('Fruits de Mer', 'assets/mer.jpg', 11.2, true),
  //   new Pizza('Marguerite', 'assets/marguerite.jpg', 7.5, true),
  // ];
  lespizzas: Pizza[] = [
 new Pizza("Neptune", "assets/neptune.jpg", 8.7, true,
 [
 new Commentaire("Ahmed", new Date(2021,10,11),"Moyenne"),
 new Commentaire("Sarra", new Date(2021,10,12),"Superbe")
 ] ),
 new Pizza("4 Saisons", "assets/saisons.jpg", 8.2, false,
),
 new Pizza("Fruits de Mer", "assets/mer.jpg", 11.2, true,
 [new Commentaire("Mondher", new Date(2021,11,15),"Trop chère!")]),
 new Pizza("Marguerite", "assets/marguerite.jpg", 7.5, true,
 [
 new Commentaire("Nour El Houda", new Date(2021,10,11),"Pas géniale"),
 new Commentaire("Oussema", new Date(2021,10,15),"Extra")
 ])];
}
