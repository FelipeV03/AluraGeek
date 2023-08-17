import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { BannerComponent } from './components/banner/banner.component'
import { ProductosComponent } from './components/productos/productos.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: BannerComponent,
    outlet: 'banner'
  },
  {
    path: '',
    component: ProductosComponent,
    outlet: 'productos'
  },
  // Otras rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
