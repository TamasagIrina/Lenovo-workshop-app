import { Component } from '@angular/core';
import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";
import { Recipe } from '../../interfaces/recepe.interface';
import { RecipesService } from '../../services/recipes.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { db } from '../../db/db';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    recipes: Recipe[]=[];
    dummyRecipes!: Recipe[];
    fileteredRecipes!: Recipe[];
    dbRecipes!: any[];
    errorMassage: any='';
    searchValue='';
   

    constructor(recipesService: RecipesService, readonly router: Router){
      this.recipes=recipesService.recipes;
      try {
        recipesService.getAllRecipes().subscribe({

          next: (responde)=>{
            console.log(responde)
            this.dummyRecipes= responde.recipes;
            this.fileteredRecipes= responde.recipes;
          }, 
          error: (err)=>{
            console.log(err)
            this.errorMassage=err
          }
        })
      } catch (error) {
        this.errorMassage=error;
      }
    
      db.subscribeQuery({ recipes: {} }, (resp) => {
        if (resp.error) {
          this.errorMassage=resp.error;
        }
        if (resp.data) {
          this.dbRecipes= resp.data.recipes;
        }
      });
      
    }



    filterValues(){
      this.fileteredRecipes= this.dummyRecipes.filter((recipe) => 
      recipe.name.toUpperCase().includes(this.searchValue.toUpperCase()))
    }

    redirectToAddRecipe(){
      this.router.navigateByUrl("add_recipes")
    }
}
