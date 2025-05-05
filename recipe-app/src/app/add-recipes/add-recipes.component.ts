import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../interfaces/recepe.interface';

@Component({
  selector: 'app-add-recipes',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-recipes.component.html',
  styleUrl: './add-recipes.component.scss'
})
export class AddRecipesComponent {
  binding: any;
  localaStorageValue: string|null= '';

  constructor(readonly recipeService: RecipesService){
    
  }

  addRecipeForm= new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    difficulty: new FormControl('', [Validators.required, Validators.minLength(3)]),
    prepTimeMinutes: new FormControl(0, [Validators.required, Validators.min(1)]),
    image: new FormControl('', [Validators.required, Validators.minLength(1)]),
  })

  onSubmit(){
    // if(this.addRecipeForm.valid)
    // console.log(this.addRecipeForm.value)
    // else console.error("Form is not valid")

    // const jsonObj={
    //   a:12,
    //   test:{
    //     a:"scv"
    //   },
    //   array:['1',2,3],
    // }

    // localStorage.setItem('theme', JSON.stringify(jsonObj));
    // sessionStorage.setItem('theme', 'light');
    // this.localaStorageValue=localStorage.getItem('theme');
  
    if(this.addRecipeForm.valid){ 
   
      this.recipeService.addDbRecipes(this.addRecipeForm.value as Omit<Recipe, 'id'>);
   
    }
  }
}
