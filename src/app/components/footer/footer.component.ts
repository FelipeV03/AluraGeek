import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  formValues = {
    nombre: '',
    email: '',
    mensaje: ''
  }

  submitForm(): void {
    if (this.formValues.nombre === '' || this.formValues.email === '' || this.formValues.mensaje === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios'
      })
      return;
    } else if (this.formValues.nombre.length > 40) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El nombre debe tener máximo 40 caracteres'
      })
      return;
    } else if (!this.formValues.email.includes('@')) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El email debe tener un formato válido'
      })
      return;
    } else if (this.formValues.mensaje.length >= 500) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El mensaje debe tener máximo 500 caracteres'
      })
      return;
    } else {
      this.formValues = {
        nombre: '',
        email: '',
        mensaje: ''
      }

      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }
}
