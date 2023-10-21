import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa tus componentes aquí
import { ClienteComponent } from '../../components/cliente/cliente.component'; // Asegúrate de que la ruta sea la correcta
import { ClienteInfoComponent } from '../../components/cliente/cliente-info/cliente-info.component';
import { ClienteCreateComponent } from '../../components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from '../../components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from '../../components/cliente/cliente-delete/cliente-delete.component';

const routes: Routes = [
  // Ruta raíz para el módulo "Cliente"
  {
    path: 'clientes',
    children: [
      {
        path: '', // path vacío
        component: ClienteComponent // muestra el componente principal
      },
      // Subruta para mostrar información
      {
        path: 'info',
        component: ClienteInfoComponent
      },
      // Subruta para crear un nuevo cliente
      {
        path: 'crear',
        component: ClienteCreateComponent
      },
      // Subruta para actualizar un cliente
      {
        path: 'actualizar',
        component: ClienteUpdateComponent
      },
      // Subruta para eliminar un cliente
      {
        path: 'eliminar',
        component: ClienteDeleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
