import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit
{
  recipelist: Recipe[];

  constructor( private recipeService: RecipeService )
  {

  }

  ngOnInit(): void 
  {
    this.recipelist =  this.recipeService.getRecipes();
  }


}
