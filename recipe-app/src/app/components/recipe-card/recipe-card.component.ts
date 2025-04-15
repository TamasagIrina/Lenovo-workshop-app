import { Component, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recepe.interface';
import { Route, Router } from '@angular/router';
import { tick } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-card',
  imports: [CommonModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;

constructor(readonly router: Router){

}

  goToRecipePage(){
    // console.log(this.recipe);
    this.router.navigateByUrl("recipes/"+ this.recipe.id)
  }
}
