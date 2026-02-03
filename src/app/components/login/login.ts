import { Component, inject } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material/material.imports';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Authservice } from '../../shared/services/authservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [...MATERIAL_IMPORTS,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder);
  private auth = inject(Authservice);
  private router = inject(Router);


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
  onSubmit() {
    const login = this.loginForm.value;
    this.auth.login(login as any).subscribe({
      next: (token) => {
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }
}