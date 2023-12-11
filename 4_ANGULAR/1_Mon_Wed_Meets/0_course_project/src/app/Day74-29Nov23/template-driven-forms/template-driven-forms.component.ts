import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css'],
})
export class TemplateDrivenFormsComponent {
  @ViewChild('registerForm')
  registerForm!: NgForm;

  dob?: string;

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
  }

  isAdult() {
    return (
      new Date(
        Date.now() - (this.dob ? Date.parse(this.dob) : Date.now())
      ).getFullYear() >= 1988
    );
  }

  resetRegistration() {
    this.registerForm.reset({
      email: 'mrnobody@nowhere',
      profile: {
        lastName: 'Nobody',
      },
    });
  }

  prefillRegistration() {
    this.registerForm.setValue({
      email: 'mrnobody@nowhere',
      password: 'pass1234',
      passConf: 'pass1234',
      profile: {
        firstName: 'Nobody',
        lastName: 'Nobody',
        dob: '2023-11-29',
      },
    });
  }

  patch() {
    // this.registerForm.form.patchValue({
    //   profile: {
    //     firstName: 'Patched',
    //     lastName: 'Patched',
    //   },
    // });
    this.registerForm.form.get('profile')?.patchValue({
      firstName: 'Patched',
      lastName: 'Patched',
    });
    this.registerForm.form.get('profile.dob')?.patchValue('2000-01-01');
  }
}
