import { FormControl } from '@angular/forms';

export class BasicValidators {
  static validateValidityDate (control: FormControl) {
    if (control.value) {
        const val = new Date(control.value);
        const today = new Date();
        if (val < today) {
          return {
            validityValidationDate: {
              valid: false
            }
          };
        }
    }
    return null;
  }
  static validateFabricationDate (control: FormControl) {
    if (control.value) {
        const perishable = control.parent.get('perishable').value
        const validityDate = new Date(control.parent.get('validity_date').value.split('/').reverse().join('-'))
        const fabricationDate = new Date(control.value.split('/').reverse().join('-'));
        if (perishable && fabricationDate > validityDate) {
          return {
            validityFabricationDate: {
              valid: false
            }
          };
        }
    }
    return null;
  }
}
