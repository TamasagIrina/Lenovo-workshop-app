import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recepe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 recipes: Recipe[]=[
{ id:'1', 
  name:"Clasic Pizza", 
  image:"https://cdn.dummyjson.com/recipe-images/1.webp",
  tags:['pizza','italian'],
  prepTimeMinutes:20,
   },
 ];
  constructor() { }
}
