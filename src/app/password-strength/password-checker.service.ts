import {Injectable} from '@angular/core';
import {PasswordStatus} from "../enums/password-status";
import {PasswordStrength} from "../enums/password-strength";

@Injectable()
export class PasswordCheckerService {
  checkPasswordStatus(password: string): PasswordStatus {
    if (!password) {
      return PasswordStatus.Empty;
    }

    if (password.length < 8) {
      return PasswordStatus.LessThanEightCharacters;
    }

    return PasswordStatus.Valid;
  }

  checkPasswordStrength(password: string): PasswordStrength {
    if (this.checkPasswordStatus(password) !== PasswordStatus.Valid) {
      throw new Error("Password is not valid");
    }
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>=\-+]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      return PasswordStrength.Strong;
    } else if (hasLetters && hasDigits || hasLetters && hasSymbols || hasDigits && hasSymbols) {
      return PasswordStrength.Middle;
    }
    return PasswordStrength.Low;
  }
}
