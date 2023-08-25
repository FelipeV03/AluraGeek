import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-menu-form-resgistro',
  templateUrl: './admin-menu-form-resgistro.component.html',
  styleUrls: ['./admin-menu-form-resgistro.component.css']
})
export class AdminMenuFormResgistroComponent {

  formValues = {
    URL: '',
    categoria: '',
    nombre: '',
    precio: '',
    descripcion: ''
  }

  constructor(private router: Router) { }

  submitForm(): void {
    if (this.formValues.URL === '' || this.formValues.categoria === '' || this.formValues.nombre === '' || this.formValues.precio === '' || this.formValues.descripcion === '') {
      this.ShowErrorMessage('Todos los campos son obligatorios');

    } else if (!this.formValues.URL.includes('https://') && !this.formValues.URL.includes('http://')) {
      this.ShowErrorMessage('La URL debe tener un formato válido');

    } else if (this.formValues.nombre.length > 50) {
      this.ShowErrorMessage('El nombre no puede tener más de 20 caracteres');

    }else if (!/^\d+$/.test(this.formValues.precio)) {
      this.ShowErrorMessage('El precio debe tener solo números');
    }else if (this.formValues.descripcion.length > 200) {
      this.ShowErrorMessage('La descripción no puede tener más de 200 caracteres');
    }else {
      this.formValues = {
        URL: '',
        categoria: '',
        nombre: '',
        precio: '',
        descripcion: ''
      }
      this.showSuccessMessage('Producto registrado exitosamente');

      this.router.navigate(['/'])

    }
  }

  private showSuccessMessage(message: string): void {
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: message
    })
  }

  private ShowErrorMessage(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message
    })
  }
}
