import { FormControl } from '@angular/forms';

export interface PhoneForm {
  name: FormControl<string | null>;
  surname: FormControl<string | null>;
  phone: FormControl<string | null>;
}
