import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ArticuloComponent} from "./components/articulo/articulo.component";

const routes: Routes = [
  {path: '', redirectTo: '/articulo', pathMatch: 'full'},
  {path: 'articulo', component: ArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
