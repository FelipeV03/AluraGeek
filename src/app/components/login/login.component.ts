import { Component, ViewChild, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  formValues = {
    email: '',
    password: ''
  }

  user = {
    email: 'fv79263@gmail.com',
    password: '123456'
  }

  constructor(private router: Router) { }

  @ViewChild('inputEmail', {static: false}) inputEmail!: ElementRef;
  @ViewChild('inputPassword', {static: false}) inputPassword!: ElementRef;

  submitForm(): void {
    // console.log(this.inputEmail.nativeElement.value);

    if (this.formValues.email === '' || this.formValues.password === '') {
      this.ShowErrorMessage('Todos los campos son obligatorios');
      return;
    } else if (!this.formValues.email.includes('@') || !this.formValues.email.includes('.')) {
      this.ShowErrorMessage('El email debe tener un formato válido');
      return;
    } else if (this.inputEmail.nativeElement.value !== this.user.email || this.inputPassword.nativeElement.value !== this.user.password) {
      this.ShowErrorMessage('El email o la contraseña son incorrectos');
      return;
    }else{
      this.formValues = {
        email: '',
        password: ''
      }

      this.router.navigate(['/admin_menu'])
    }
  }

  private ShowErrorMessage(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
    })
  }
}
