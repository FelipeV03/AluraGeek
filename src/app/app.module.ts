import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
