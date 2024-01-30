import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService
{
    
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipe_list:Recipe[] = [
        new Recipe('Pizza', 
        'A yummy pizza!', 
        'https://www.eatingwell.com/thmb/oHvDTS4pq63C9uF1YK03SEpdSrU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gettyimages-1124303516-36413b5bf61f45f1b7d18d90000b56b7.jpg',
        [
            new Ingredient('Bread', 1),
            new Ingredient('Pizza Sauce', 1),
            new Ingredient('Cheese', 1),
        ]),
        new Recipe('Salad', 
        'A healthy Salad!', 
        'https://www.recipetineats.com/wp-content/uploads/2021/08/Garden-Salad_48.jpg',
        [
            new Ingredient('Lettuce', 1),
            new Ingredient('Crutons', 1),
            new Ingredient('Dressing', 1),])
      ];

    getRecipes()
    {
        return this.recipe_list.slice();
    }



}