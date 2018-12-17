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
        let validityDate = control.parent.get('validity_date').value;
        if (validityDate) {
            validityDate = new Date(validityDate.split('/').reverse().join('-'));
            const perishable = control.parent.get('perishable').value;
            const fabricationDate = new Date(control.value.split('/').reverse().join('-'));
            if (perishable && fabricationDate > validityDate) {
                return {
                    validityFabricationDate: {
                        valid: false
                    }
                };
            }
        }
    }
    return null;
  }
}
