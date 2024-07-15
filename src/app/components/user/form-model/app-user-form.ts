import { FormGroup, FormControl, Validators } from '@angular/forms';

export class AppUserForm extends FormGroup {
  constructor() {
    super({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      type: new FormControl('individual', Validators.required),
      pib: new FormControl({ value: '', disabled: true }, Validators.required),
      mbr: new FormControl({ value: '', disabled: true }, Validators.required),
    });

    this.controls['type'].valueChanges.subscribe((type) => {
      if (type === 'company') {
        this.controls['pib'].enable();
        this.controls['mbr'].enable();
      } else {
        this.controls['pib'].disable();
        this.controls['mbr'].disable();
      }
    });
  }
}
