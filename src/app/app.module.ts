import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NzUploadModule } from 'ng-zorro-antd/upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FooterComponent } from './components/footer/footer.component';
import { DevelopmentComponent } from './components/development/development.component';
import { LoginComponent } from './components/login/login.component';
import { AdminMenuFormResgistroComponent } from './components/admin-menu-form-resgistro/admin-menu-form-resgistro.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ProductosComponent,
    FooterComponent,
    DevelopmentComponent,
    LoginComponent,
    AdminMenuFormResgistroComponent,
    ProductDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    NzUploadModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }