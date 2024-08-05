import {Injectable} from '@angular/core';
import {PasswordStatus} from "./enums/password-status";
import {PasswordStrength} from "./enums/password-strength";

@Injectable({
  providedIn: 'root'
})
export class PasswordCheckerService {

  constructor() {
  }

  checkPasswordStatus(password: string): PasswordStatus {
    if (password === null || password === '' || password === undefined) {
      return PasswordStatus.Empty;
    }

    if (password.length < 8) {
      return PasswordStatus.LessThanEightCharacters;
    }

    return PasswordStatus.Valid;
  }

  checkPasswordStrength(password: string): PasswordStrength {
    if (this.checkPasswordStatus(password)!==PasswordStatus.Valid){
      throw new Error("Password is not valid");
    }

    return PasswordStrength.Strong;
  }
}
