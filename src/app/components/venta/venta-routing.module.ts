import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VentaComponent } from './venta.component'; // Asegúrate de que la ruta sea la correcta
import { VentaCreateComponent } from './venta-create/venta-create.component';
import { VentaUpdateComponent } from './venta-update/venta-update.component';
import { VentaDeleteComponent } from './venta-delete/venta-delete.component';
import { VentaListComponent } from './venta-list/venta-list.component';

const routes: Routes = [
  {
    path: 'ventas',
    children: [
      {
        path: '', // path vacío para el componente principal
        component: VentaComponent
      },
      {
        path: 'crear',
        component: VentaCreateComponent
      },
      {
        path: 'actualizar',
        component: VentaUpdateComponent
      },
      {
        path: 'eliminar',
        component: VentaDeleteComponent
      },
      {
        path: 'listar',
        component: VentaListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
