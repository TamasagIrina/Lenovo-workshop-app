import { Component, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recepe.interface';

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;
}
