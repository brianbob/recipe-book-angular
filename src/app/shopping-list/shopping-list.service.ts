import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService
{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients:Ingredient[] = [
        new Ingredient("Cheese", 1),
        new Ingredient("Pizza Sauce", 2),
        new Ingredient("Crust", 1)
      ];
    
    getIngredients()
    {
        return this.ingredients.slice();
    }

    addIngredient( i:Ingredient)
    {
        this.ingredients.push( i );
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}