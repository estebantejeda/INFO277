import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import {ListaArticulosComponent} from './components/lista-articulos/lista-articulos.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ListaProveedoresComponent } from './components/lista-proveedores/lista-proveedores.component';
import {KardexComponent} from "./components/kardex/kardex.component";
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { IngresarComprasComponent } from './components/ingresar-compras/ingresar-compras.component';
import { GrillaArticulosComponent } from './components/ingresar-compras/grilla-articulos/grilla-articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticuloComponent,
    ListaArticulosComponent,
    ProveedoresComponent,
    ListaProveedoresComponent,
    KardexComponent,
    ClienteComponent,
    ListaClientesComponent,
    IngresarComprasComponent,
    GrillaArticulosComponent
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
