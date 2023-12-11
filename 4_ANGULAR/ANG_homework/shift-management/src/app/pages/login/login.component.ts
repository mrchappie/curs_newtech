import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HandleDBService } from 'src/app/utils/services/handleDB/handle-db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: HandleDBService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['alex@mail.com'],
      password: ['Alex2023!'],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
  }
}
