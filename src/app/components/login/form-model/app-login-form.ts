import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordStrengthValidator } from '../../../helpers/passwordStrenght';

export class AppLoginForm extends FormGroup {
  constructor() {
    super({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        passwordStrengthValidator(8, 4),
      ]),
    });
  }
}
