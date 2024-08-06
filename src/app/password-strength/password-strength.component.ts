import {Component} from '@angular/core';
import {ColorSectionComponent} from "../color-section/color-section.component";
import {FormsModule} from "@angular/forms";
import {PasswordCheckerService} from "../password-checker.service";
import {PasswordStatus} from "../enums/password-status";
import {PasswordStrength} from "../enums/password-strength";

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [
    ColorSectionComponent,
    FormsModule
  ],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css',
  providers: [PasswordCheckerService]
})
export class PasswordStrengthComponent {
  color1: string = 'grey';
  color2: string = 'grey';
  color3: string = 'grey';
  password: string = '';

  constructor(private passwordCheckerService: PasswordCheckerService) {
  }

  onPasswordChange() {
    this.color1 = 'green';
    console.log("changed");
    const validityStatus = this.passwordCheckerService.checkPasswordStatus(this.password);
    if (validityStatus === PasswordStatus.Empty) {
      this.color1 = 'gray';
      this.color2 = 'gray';
      this.color3 = 'gray';
      return;
    } else if (validityStatus === PasswordStatus.LessThanEightCharacters) {
      this.color1 = 'red';
      this.color2 = 'red';
      this.color3 = 'red';
      return;
    }

    const strength = this.passwordCheckerService.checkPasswordStrength(this.password);
    switch (strength) {
      case PasswordStrength.Low: {
        this.color1 = 'red';
        this.color2 = 'gray';
        this.color3 = 'gray';
        break;
      }
      case PasswordStrength.Middle: {
        this.color1 = 'yellow';
        this.color2 = 'yellow';
        this.color3 = 'gray';
        break;
      }
      case PasswordStrength.Strong: {
        this.color1 = 'green';
        this.color2 = 'green';
        this.color3 = 'green';
        break;
      }
    }

  }
}
