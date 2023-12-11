import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  testEmailPattern = /test/i;
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.registerForm = new FormGroup(
    //   {
    //     email: new FormControl(
    //       '',
    //       [Validators.required, Validators.email, this.isTestEmail.bind(this)],
    //       this.isUniqueUser
    //     ),
    //     password: new FormControl(),
    //     passConf: new FormControl(),
    //     profile: new FormGroup({
    //       firstName: new FormControl('', Validators.minLength(2)),
    //       lastName: new FormControl('', [
    //         Validators.minLength(2),
    //         this.isTestEmail.bind(this),
    //       ]),
    //       dob: new FormControl('', this.isAdult),
    //       hobbies: new FormArray([]),
    //     }),
    //   },
    //   this.isSameValue('password', 'passConf')
    // );

    this.registerForm = this.fb.group(
      {
        email: [
          null,
          [Validators.required, Validators.email, this.isTestEmail.bind(this)],
          this.isUniqueUser,
        ],
        password: [null, Validators.required],
        passConf: [null, Validators.required],
        profile: this.fb.group({
          firstName: [null, Validators.minLength(2)],
          lastName: [
            null,
            [Validators.minLength(2), this.isTestEmail.bind(this)],
          ],
          dob: [null, this.isAdult],
          hobbies: this.fb.array([]),
        }),
      },
      { validators: this.isSameValue('password', 'passConf') }
    );

    this.registerForm.statusChanges.subscribe((status) => console.log(status));
    this.registerForm.valueChanges.subscribe((value) => console.log(value));
  }

  async isUniqueUser() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return null;
  }

  get hobbies() {
    return (this.registerForm.get('profile.hobbies') as FormArray).controls;
  }

  addHobby() {
    (this.registerForm.get('profile.hobbies') as FormArray).push(
      new FormControl()
    );
  }

  isSameValue(control1: string, control2: string): ValidatorFn {
    return (control: AbstractControl) =>
      control.get(control1)?.value === control.get(control2)?.value
        ? null
        : { isDifferent: { value1: control1, value2: control2 } };
  }

  isTestEmail(control: AbstractControl) {
    if (this.testEmailPattern.test(control.value)) return { isTestEmail: true };
    return null;
  }

  isAdult(control: AbstractControl) {
    if (
      control.value &&
      new Date(
        Date.now() - (control.value ? Date.parse(control.value) : Date.now())
      ).getFullYear() < 1988
    )
      return { notAdult: true };
    return null;
  }

  onSubmit() {
    console.log(this.registerForm);
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
    this.registerForm.get('profile')?.patchValue({
      firstName: 'Patched',
      lastName: 'Patched',
    });
    this.registerForm.get('profile.dob')?.patchValue('2000-01-01');
  }
}
