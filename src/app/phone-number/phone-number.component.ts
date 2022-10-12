import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css'],
})
export class PhoneNumberComponent {
  myForm: FormGroup;
  phoneNumber;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      phone: [undefined, [Validators.required]],
    });
  }

  submitPhone() {
    if (this.myForm.valid) {
      this.phoneNumber = this.myForm.get('phone').value;
    }
  }

  get phoneValue() {
    return this.myForm.controls['phone'];
  }
}
