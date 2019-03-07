import { Component, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipes for Pizza',
      'very good idea for pizza people',
      'https://cdn3.tmbi.com/toh/GoogleImages/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS.jpg'
    )
  ]

  constructor() {}

  ngOnInit() {}
}
