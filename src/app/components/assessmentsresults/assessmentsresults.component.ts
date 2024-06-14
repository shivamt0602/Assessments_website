import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from '../../models/users';

@Component({
  selector: 'app-assessmentsresults',
  templateUrl: './assessmentsresults.component.html',
  styleUrls: ['./assessmentsresults.component.scss']
})
export class AssessmentsresultsComponent {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dob: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.userForm.get(controlName);
    if (control) {
      return control.invalid && (control.dirty || control.touched);
    }
    return false;
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formValue = this.userForm.value;
      const user = new Users(
        formValue.firstName,
        formValue.lastName,
        formValue.email,
        formValue.mobile,
        formValue.password,
        formValue.dob,
        formValue.role
      );
      console.log("Form Submitted:", user);
      // Perform further operations like saving to a database, etc.
    } else {
      console.log("Form is invalid");
    }
  }
}
