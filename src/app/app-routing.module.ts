import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ArticuloComponent} from "./components/articulo/articulo.component";
import {ListaArticulosComponent} from "./components/lista-articulos/lista-articulos.component";
import {ProveedoresComponent} from "./components/proveedores/proveedores.component";
import {ListaProveedoresComponent} from "./components/lista-proveedores/lista-proveedores.component";
import {KardexComponent} from "./components/kardex/kardex.component";
import {ClienteComponent} from "./components/cliente/cliente.component";
import {ListaClientesComponent} from "./components/lista-clientes/lista-clientes.component";
import {IngresarComprasComponent} from "./components/ingresar-compras/ingresar-compras.component";
import {IngresarVentasComponent} from "./components/ingresar-ventas/ingresar-ventas.component";
import { LibroVentasComponent } from './components/libro-ventas/libro-ventas.component';
import {NuevaCompraComponent} from "./components/nueva-compra/nueva-compra.component";
import {LibroComprasComponent} from "./components/libro-compras/libro-compras.component";

const routes: Routes = [
  {path: '', redirectTo: '/newArticle', pathMatch: 'full'},
  {path: 'newArticle', component: ArticuloComponent},
  {path: 'article', component: ListaArticulosComponent},
  {path: 'newProvider', component: ProveedoresComponent},
  {path: 'provider', component: ListaProveedoresComponent},
  {path: 'kardex', component: KardexComponent},
  {path: 'newCustomer', component: ClienteComponent},
  {path: 'customer', component: ListaClientesComponent},
  {path: 'newPurchase', component: IngresarComprasComponent},
  {path: 'newSale', component: IngresarVentasComponent},
  {path: 'saleLedger', component: LibroVentasComponent},
  {path: 'purchase', component: NuevaCompraComponent},
  {path: 'purchaseLedger', component: LibroComprasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
