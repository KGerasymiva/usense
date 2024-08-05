import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PasswordStrengthComponent} from "./password-strength/password-strength.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordStrengthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TestPasswordStrength';
}
