import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { GestionVentasPage } from './gestion-ventas.page';

const routes: Routes = [
  {
    path: '',
    component: GestionVentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class GestionVentasPageRoutingModule {}
