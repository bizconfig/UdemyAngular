import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe('A test recipe','a test recipe','https://www.save.ca/community/wp-content/uploads/2013/03/clubhouse_Recipe.jpg'),
  new Recipe('A test recipe','a test recipe','https://www.save.ca/community/wp-content/uploads/2013/03/clubhouse_Recipe.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
