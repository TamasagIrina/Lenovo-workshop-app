import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AddRecipesComponent } from './add-recipes/add-recipes.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
    {path:"", redirectTo: 'recipes', pathMatch: 'full' },
    {path:'recipes', component: HomeComponent}, 
    {path:'recipes/:id', component: RecipePageComponent}, 
    {path:'add_recipes', component: AddRecipesComponent},
    {path:'**', component: Page404Component},
];
