import { Component } from '@angular/core';
import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";
import { Recipe } from '../../interfaces/recepe.interface';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    recipes: Recipe[]=[];
    dummyRecipes!: Recipe[];
    errorMassage: any='';
   

    constructor(recipesService: RecipesService){
      this.recipes=recipesService.recipes;
      try {
        recipesService.getAllRecipes().subscribe({

          next: (responde)=>{
            console.log(responde)
            this.dummyRecipes= responde.recipes;
          }, 
          error: (err)=>{
            console.log(err)
            this.errorMassage=err
          }
        })
      } catch (error) {
        this.errorMassage=error;
      }
    
    }
}
