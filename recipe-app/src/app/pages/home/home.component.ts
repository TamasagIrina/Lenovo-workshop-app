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
    dummyRecipes!: any[];
    fileteredRecipes!: any[];
    dbRecipes!: any[];
    errorMassage: any='';
    searchValue='';
    dbS: any;
   

    constructor(private recipesService: RecipesService, readonly router: Router){}

    ngOnInit(){
      // this.recipes=this.recipesService.recipes;
      // try {
      //   this.recipesService.getAllRecipes().subscribe({

      //     next: (responde)=>{
      //       console.log(responde)
      //       this.dummyRecipes= responde.recipes;
      //       this.fileteredRecipes= responde.recipes;
      //     }, 
      //     error: (err)=>{
      //       console.log(err)
      //       this.errorMassage=err
      //     }
      //   })
      // } catch (error) {
      //   this.errorMassage=error;
      // }
    
      this.dbS = db.subscribeQuery({ recipes: {} }, (resp) => {
        if (resp.error) {
          this.errorMassage=resp.error;
        }
        if (resp.data) {
          this.dbRecipes= resp.data.recipes;
          this.fileteredRecipes= this.dbRecipes;

        }
      });

    }

    ngOnDestroy(){
       this.dbS();
    }



    filterValues(){
      this.fileteredRecipes= this.dbRecipes.filter((recipe) => 
      recipe.name.toUpperCase().includes(this.searchValue.toUpperCase()))
    }

    redirectToAddRecipe(){
      this.router.navigateByUrl("add_recipes")
    }
}
