import { Component, Input } from '@angular/core';
import { Pizza } from '../pizza';
@Component({
  selector: 'moh-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent {
  @Input() pizza!: Pizza;
}
