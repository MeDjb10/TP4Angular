import { Component, Input } from '@angular/core';
import { Pizza } from '../pizza';
import { Commentaire } from '../commentaire';
@Component({
  selector: 'moh-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent {
  @Input() pizza!: Pizza;
  
  click : boolean = false;
  Affiche(){
    this.click ? this.click = false : this.click = true;
    
  }
}
