import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntregaComponent } from './entrega.component'; // Asegúrate de que la ruta sea la correcta
import { EntregaCreateComponent } from './entrega-create/entrega-create.component';
import { EntregaUpdateComponent } from './entrega-update/entrega-update.component';
import { EntregaDeleteComponent } from './entrega-delete/entrega-delete.component';
import { EntregaListComponent } from './entrega-list/entrega-list.component';

const routes: Routes = [
  {
    path: 'entregas',
    children: [
      {
        path: '', // path vacío para el componente principal
        component: EntregaComponent
      },
      {
        path: 'crear',
        component: EntregaCreateComponent
      },
      {
        path: 'actualizar',
        component: EntregaUpdateComponent
      },
      {
        path: 'eliminar',
        component: EntregaDeleteComponent
      },
      {
        path: 'listar',
        component: EntregaListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntregaRoutingModule { }
