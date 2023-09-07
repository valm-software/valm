import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionVentasPage } from './gestion-ventas.page';

const routes: Routes = [
  {
    path: '',
    component: GestionVentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionVentasPageRoutingModule {}
