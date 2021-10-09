import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ListaArticulosComponent } from './components/articulo/lista-articulos/lista-articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticuloComponent,
    ListaArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
