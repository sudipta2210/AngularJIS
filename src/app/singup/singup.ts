import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminService } from '../admin-service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './singup.html',
  styleUrl: './singup.css',
})
export class Singup {
  signupForm: FormGroup;
  isLoading = signal(false);
  successMessage = signal('');
  errorMessage = signal('');

  public JWTToken: string = '';

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.isLoading.set(true);
      this.successMessage.set('');
      this.errorMessage.set('');

      const { emailId, password } = this.signupForm.value;

      //API CALL SIGN-UP
      this.adminService.signup(emailId, password).subscribe({
        next: (response) => {
          this.isLoading.set(false);
          this.successMessage.set('Sign up successful!');
          console.log('Signup successful:', response);
          this.JWTToken = response.data.token; //Store JWT TOKEN INTO local Variable
          console.log(this.JWTToken);

          // Store the token
          localStorage.setItem('Mytoken', this.JWTToken);
          
          // Set authenticated status
          this.authService.setAuthenticated(true);
          
          this.signupForm.reset();
          
          // Navigate to department after successful signup
          setTimeout(() => {
            this.router.navigate(['/department']);
          }, 1500);
        },
        error: (error) => {
          this.isLoading.set(false);
          this.errorMessage.set(error?.error?.message || 'Sign up failed. Please try again.');
          console.error('Signup error:', error);
        }
      });
    }
  }
}
