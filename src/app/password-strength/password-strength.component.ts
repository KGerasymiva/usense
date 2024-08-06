import {Component, OnInit} from '@angular/core';
import {ColorSectionComponent} from "../color-section/color-section.component";
import {FormsModule} from "@angular/forms";
import {PasswordCheckerService} from "./password-checker.service";
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
export class PasswordStrengthComponent implements OnInit {
  color1: string = '';
  color2: string = '';
  color3: string = '';
  password: string = '';

  constructor(private passwordCheckerService: PasswordCheckerService) {
  }

  ngOnInit(): void {
        this.setColors('gray', 'gray', 'gray');
    }

  onPasswordChange() {
    const validityStatus = this.passwordCheckerService.checkPasswordStatus(this.password);
    if (validityStatus === PasswordStatus.Empty) {
      this.setColors('gray', 'gray', 'gray');
      return;
    } else if (validityStatus === PasswordStatus.LessThanEightCharacters) {
      this.setColors('red', 'red', 'red');
      return;
    }

    const strength = this.passwordCheckerService.checkPasswordStrength(this.password);
    switch (strength) {
      case PasswordStrength.Low: {
        this.setColors('red', 'gray', 'gray');
        break;
      }
      case PasswordStrength.Middle: {
        this.setColors('yellow', 'yellow', 'gray');
        break;
      }
      case PasswordStrength.Strong: {
        this.setColors('green', 'green', 'green');
        break;
      }
    }
  }

  private setColors(color1: string, color2: string, color3: string) {
    this.color1 = color1;
    this.color2= color2;
    this.color3 = color3;
  }
}
