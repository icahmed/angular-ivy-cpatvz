import { FormControl } from '@angular/forms';

export interface ProfileForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  phone: FormControl<string | null>;
}
