import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './usuario.component'; // Asegúrate de que la ruta sea la correcta
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './usuario-delete/usuario-delete.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

const routes: Routes = [
  {
    path: 'usuarios', // ruta base para el módulo "Usuario"
    children: [
      {
        path: '', // path vacío para el componente principal
        component: UsuarioComponent
      },
      {
        path: 'crear',
        component: UsuarioCreateComponent
      },
      {
        path: 'actualizar',
        component: UsuarioUpdateComponent
      },
      {
        path: 'eliminar',
        component: UsuarioDeleteComponent
      },
      {
        path: 'listar',
        component: UsuarioListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
