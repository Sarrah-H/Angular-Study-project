import { Component } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})

export class ShoppingListComponent {
ingredients  : Ingredient[] = [
  new Ingredient ('apples', 5),
  new Ingredient ('banana', 15)
];
constructor(){}
}
