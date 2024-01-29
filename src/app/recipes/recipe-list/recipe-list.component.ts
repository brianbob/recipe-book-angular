import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent 
{
  recipe_list:Recipe[] = [
    new Recipe('Pizza', 'A yummy pizza!', 'https://www.eatingwell.com/thmb/oHvDTS4pq63C9uF1YK03SEpdSrU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gettyimages-1124303516-36413b5bf61f45f1b7d18d90000b56b7.jpg'),
    new Recipe('Salad', 'A healthy Salad!', 'https://www.recipetineats.com/wp-content/uploads/2021/08/Garden-Salad_48.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  onRecipeSelected( recipe:Recipe ) 
  {
    this.recipeWasSelected.emit(recipe);
  }
}
