import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionCobrosPage } from './gestion-cobros.page';

const routes: Routes = [
  {
    path: '',
    component: GestionCobrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCobrosPageRoutingModule {}
