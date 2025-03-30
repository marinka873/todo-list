import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

//Добавляем интерфейс для описания типов полей в нашей форме
//FormControl - тип поля
interface RegisterForm {
  name: FormControl<string>,
  email: FormControl<string>,
  password: FormControl<string>,
  confirmPassword: FormControl<string>
}

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent {
  registerForm: FormGroup<RegisterForm>;

  constructor(private fb: FormBuilder) {

    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
      },
      { validators: this.passwordMatchValidator }
    );
  }
  
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  submitForm() {
    if (this.registerForm.valid) {
      console.log('Форма отправлена!', this.registerForm.value);
    } else {
      console.log('Форма содержит ошибки');
    }
  }
}
