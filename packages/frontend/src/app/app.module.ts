import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
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
import { IngresarVentasComponent } from './components/ingresar-ventas/ingresar-ventas.component';
import { GrillaVentasComponent } from './components/ingresar-ventas/grilla-ventas/grilla-ventas.component';
import { FiltroKardexPipe } from './pipes/filtro-kardex.pipe';
import { LibroVentasComponent } from './components/libro-ventas/libro-ventas.component';
import { NuevaCompraComponent } from './components/nueva-compra/nueva-compra.component';
import { LibroComprasComponent } from './components/libro-compras/libro-compras.component';
import { GrillaCompraComponent } from './components/nueva-compra/grilla-compra/grilla-compra.component';
import { ListaCuentasComponent } from './components/nueva-compra/lista-cuentas/lista-cuentas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarCargosComponent } from './components/libro-compras/listar-cargos/listar-cargos.component';
import { AfpComponent } from './components/afp/afp.component';
import { IsapreComponent } from './components/isapre/isapre.component';
import { ParametrosComponent } from './components/parametros/parametros.component';
import { ListarAfpComponent } from './components/afp/listar-afp/listar-afp.component';
import { ListarIsapreComponent } from './components/isapre/listar-isapre/listar-isapre.component';
import { ListarParametrosComponent } from './components/parametros/listar-parametros/listar-parametros.component';
import { IngresarPersonalComponent } from './components/ingresar-personal/ingresar-personal.component';
import { IngresarHaberesDescuentosComponent } from './components/ingresar-haberes-descuentos/ingresar-haberes-descuentos.component';
import { ListarPersonalComponent } from './components/listar-personal/listar-personal.component';
import { GenerarHaberesDescuentosComponent } from './components/ingresar-haberes-descuentos/generar-haberes-descuentos/generar-haberes-descuentos.component';
import { ListarCotizacionPersonalComponent } from './components/listar-cotizacion-personal/listar-cotizacion-personal.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { AfiliadosAfpComponent } from './components/afp/afiliados-afp/afiliados-afp.component';
import { LibroRemuneracionesComponent } from './components/libro-remuneraciones/libro-remuneraciones.component';
import { ListarLibroRemuneracionesComponent } from './components/libro-remuneraciones/listar-libro-remuneraciones/listar-libro-remuneraciones.component';

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
    GrillaArticulosComponent,
    IngresarVentasComponent,
    GrillaVentasComponent,
    FiltroKardexPipe,
    LibroVentasComponent,
    NuevaCompraComponent,
    LibroComprasComponent,
    GrillaCompraComponent,
    ListaCuentasComponent,
    ListarCargosComponent,
    AfpComponent,
    IsapreComponent,
    ParametrosComponent,
    ListarAfpComponent,
    ListarIsapreComponent,
    ListarParametrosComponent,
    IngresarPersonalComponent,
    IngresarHaberesDescuentosComponent,
    ListarPersonalComponent,
    GenerarHaberesDescuentosComponent,
    ListarCotizacionPersonalComponent,
    CotizacionesComponent,
    AfiliadosAfpComponent,
    LibroRemuneracionesComponent,
    ListarLibroRemuneracionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
