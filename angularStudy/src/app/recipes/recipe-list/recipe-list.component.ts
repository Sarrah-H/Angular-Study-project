import { Component } from '@angular/core';
import { Recipess } from '../recipess.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipess[] = [ new Recipess( "teset name","test my recipe here","https://shorturl.at/rvJS5" ),new Recipess( "teset name","test my recipe here","https://shorturl.at/rvJS5" )]; 

}
