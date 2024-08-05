import { Component } from '@angular/core';
import {ColorSectionComponent} from "../color-section/color-section.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [
    ColorSectionComponent,
    FormsModule
  ],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css'
})
export class PasswordStrengthComponent {

  color1:string = 'grey';
  color2:string = 'grey';
  color3:string = 'grey';
  password: string='';

  onPasswordChange() {
    this.color1='green';
    console.log("changed");


  }
}
