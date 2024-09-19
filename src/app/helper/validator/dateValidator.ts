import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dueDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value ? new Date(control.value) : null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (value && value < today) {
      return { dueDateTooEarly: true };
    }
    return null;
  };
}
