import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients:Ingredient[] = [
    new Ingredient("Cheese", 1),
    new Ingredient("Pizza Sauce", 2),
    new Ingredient("Crust", 1)
  ];

  onIngredientAdded( ingredient:Ingredient)
  {
    this.ingredients.push(ingredient);
  }
}
