import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionRepartosPage } from './gestion-repartos.page';

const routes: Routes = [
  {
    path: '',
    component: GestionRepartosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionRepartosPageRoutingModule {}
