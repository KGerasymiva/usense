import { Component } from '@angular/core';
import {ColorSectionComponent} from "../color-section/color-section.component";
import {FormsModule} from "@angular/forms";
import {PasswordCheckerService} from "../password-checker.service";

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [
    ColorSectionComponent,
    FormsModule
  ],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css',
  providers:[PasswordCheckerService]
})
export class PasswordStrengthComponent {
  color1:string = 'grey';
  color2:string = 'grey';
  color3:string = 'grey';
  password: string='';

  constructor(private passwordCheckerService: PasswordCheckerService) {
  }
  onPasswordChange() {
    this.color1='green';
    console.log("changed");


  }
}
