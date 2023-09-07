import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionInventariosPage } from './gestion-inventarios.page';

const routes: Routes = [
  {
    path: '',
    component: GestionInventariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionInventariosPageRoutingModule {}
