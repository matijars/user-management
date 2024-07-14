import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordStrengthValidator } from '../../../helpers/passwordStrenght';
import { passwordMatchValidator } from '../../../helpers/passwordMatchValidator';

export class AppRegisterForm extends FormGroup {
  constructor() {
    super(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          passwordStrengthValidator(8, 4),
        ]),
        confirmPassword: new FormControl(null, Validators.required),
      },
      { validators: passwordMatchValidator }
    );
  }
}
