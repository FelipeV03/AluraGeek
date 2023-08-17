import { Component } from '@angular/core';
import { NavigationEnd, Router, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AluraGeek';

  // Variable para determinar si estamos en la ruta de inicio de sesión
  isLoginRoute: boolean = false;

  constructor(private router: Router) {
    // Utilizar el servicio Router para escuchar los eventos de navegación
    this.router.events.pipe(
      // Filtrar solo los eventos de tipo NavigationEnd (finalización de navegación)
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe((event: RouterEvent) => {
      // Comprobar si el evento es de tipo NavigationEnd
      if (event instanceof NavigationEnd) {
        // Verificar si la URL actual es la ruta de inicio de sesión
        this.isLoginRoute = (event.url === '/login');
      }
    });
  }
}
