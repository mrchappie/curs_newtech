import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HandleDBService } from 'src/app/utils/services/handleDB/handle-db.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: HandleDBService,
    private router: Router
  ) {}

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
    this.auth.register(this.registerForm.value);

    this.router.navigate(['/']);
  }
}

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  password: string;
  confPass: string;
  email: string;
  dob: Date;
  termsAndConditions: boolean;
}
