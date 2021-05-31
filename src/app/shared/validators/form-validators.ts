import { FormControl, FormGroup } from '@angular/forms';

export class FormValidators{


  public passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value === frm.controls['confirmPassword'].value ? null : {'mismatch': true};
  }

}
