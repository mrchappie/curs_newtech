import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HandleDBService } from 'src/app/utils/services/handleDB/handle-db.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: HandleDBService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['Alexandru'],
      lastName: ['Boscu'],
      password: ['Alex2023!'],
      confPass: ['Alex2023!'],
      email: ['alex@mail.com'],
      dob: [''],
      termsAndConditions: [false],
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.auth.register(
      this.registerForm.value.email,
      this.registerForm.value.password,
      this.registerForm.value.firstName,
      this.registerForm.value.lastName
    );
  }
}
