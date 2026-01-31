import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../../shared/material/material.imports';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { User } from '../../shared/services/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-user',
  imports: [CommonModule, ...MATERIAL_IMPORTS, ReactiveFormsModule],
  templateUrl: './create-user.html',
  styleUrl: './create-user.scss',
})
export class CreateUser {

  isLoading = signal(false);
  formBuilder = inject(FormBuilder);
  userService = inject(User);
  snackBar = inject(MatSnackBar);

  createUserFormGroup = new FormGroup({
    name: new FormControl<string>('', { validators: [Validators.required, Validators.maxLength(50)] }),
    email: new FormControl<string>('', { validators: [Validators.required, Validators.email] }),
    password: new FormControl<string>('', { validators: [Validators.required, Validators.minLength(8)] }),
    deliveryAddress: new FormControl<string>('', { validators: [Validators.required, Validators.minLength(8)] }),

  });

  onSubmit() {
    if (this.createUserFormGroup.valid) {
      this.isLoading.set(true);
      const userData = this.createUserFormGroup.value;
      this.userService.createUser(userData as any).subscribe({
        next: () => {
          this.isLoading.set(false);
          this.snackBar.open('✓ User created successfully!', 'Close', {
            duration: 4000,
            panelClass: ['success-snackbar'],
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });
          this.createUserFormGroup.reset({
            name: '',
            email: '',
            password: '',
            deliveryAddress: ''
          });
          this.createUserFormGroup.markAllAsTouched();
        },
        error: () => {
          this.isLoading.set(false);
          this.snackBar.open('✗ Error creating user. Please try again.', 'Close', {
            duration: 5000,
            panelClass: ['error-snackbar'],
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });

        }
      });
    } else {
      console.warn('Form is invalid. Please fill out all required fields.');
      this.createUserFormGroup.markAllAsTouched();
    }

  }

}
