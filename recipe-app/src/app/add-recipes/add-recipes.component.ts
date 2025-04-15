import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipes',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-recipes.component.html',
  styleUrl: './add-recipes.component.scss'
})
export class AddRecipesComponent {
  binding: any;

  addRecipeForm= new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    preparationTime: new FormControl(0, [Validators.required, Validators.min(1)]),
  })

  onSubmit(){
    if(this.addRecipeForm.valid)
    console.log(this.addRecipeForm.value)
    else console.error("Form is not valid")
  }
}
