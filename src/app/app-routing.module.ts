import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { BannerComponent } from './components/banner/banner.component'
import { ProductosComponent } from './components/productos/productos.component'
import { AdminMenuFormResgistroComponent } from './components/admin-menu-form-resgistro/admin-menu-form-resgistro.component'

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
  {
    path: 'admin_menu',
    component: AdminMenuFormResgistroComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
