import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CobroComponent } from './cobro.component'; // Asegúrate de que la ruta sea la correcta
import { CobroCreateComponent } from './cobro-create/cobro-create.component';
import { CobroUpdateComponent } from './cobro-update/cobro-update.component';
import { CobroDeleteComponent } from './cobro-delete/cobro-delete.component';
import { CobroListComponent } from './cobro-list/cobro-list.component';

const routes: Routes = [
  {
    path: 'cobros',
    children: [
      {
        path: '', // path vacío para el componente principal
        component: CobroComponent
      },
      {
        path: 'crear',
        component: CobroCreateComponent
      },
      {
        path: 'actualizar',
        component: CobroUpdateComponent
      },
      {
        path: 'eliminar',
        component: CobroDeleteComponent
      },
      {
        path: 'listar',
        component: CobroListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CobroRoutingModule { }
