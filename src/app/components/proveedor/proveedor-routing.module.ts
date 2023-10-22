import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProveedorComponent } from './proveedor.component'; // Asegúrate de que la ruta sea la correcta
import { ProveedorCreateComponent } from './proveedor-create/proveedor-create.component';
import { ProveedorUpdateComponent } from './proveedor-update/proveedor-update.component';
import { ProveedorDeleteComponent } from './proveedor-delete/proveedor-delete.component';
import { ProveedorListComponent } from './proveedor-list/proveedor-list.component';

const routes: Routes = [
  {
    path: 'proveedores',
    children: [
      {
        path: '', // path vacío para el componente principal
        component: ProveedorComponent
      },
      {
        path: 'crear',
        component: ProveedorCreateComponent
      },
      {
        path: 'actualizar',
        component: ProveedorUpdateComponent
      },
      {
        path: 'eliminar',
        component: ProveedorDeleteComponent
      },
      {
        path: 'listar',
        component: ProveedorListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedorRoutingModule { }

