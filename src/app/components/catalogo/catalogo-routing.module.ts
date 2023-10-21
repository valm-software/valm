import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo.component';
import { CatalogoCreateComponent } from './catalogo-create/catalogo-create.component';
import { CatalogoDeleteComponent } from './catalogo-delete/catalogo-delete.component';
import { CatalogoListComponent } from './catalogo-list/catalogo-list.component';
import { CatalogoUpdateComponent } from './catalogo-update/catalogo-update.component';

const routes: Routes = [
  {
    path: 'catalogos', // Ruta raíz flexible
    children: [
      {
        path: '', // path vacío para el componente principal
        component: CatalogoComponent
      },
      {
        path: 'crear',
        component: CatalogoCreateComponent
      },
      {
        path: 'eliminar',
        component: CatalogoDeleteComponent
      },
      {
        path: 'lista',
        component: CatalogoListComponent
      },
      {
        path: 'actualizar',
        component: CatalogoUpdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
