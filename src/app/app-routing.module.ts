import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'gestion-clientes',
    loadChildren: () => import('./pages/gestion-clientes/gestion-clientes.module').then( m => m.GestionClientesPageModule)
  },
  {
    path: 'gestion-ventas',
    loadChildren: () => import('./pages/gestion-ventas/gestion-ventas.module').then( m => m.GestionVentasPageModule)
  },
  {
    path: 'gestion-cobros',
    loadChildren: () => import('./pages/gestion-cobros/gestion-cobros.module').then( m => m.GestionCobrosPageModule)
  },
  {
    path: 'gestion-inventarios',
    loadChildren: () => import('./pages/gestion-inventarios/gestion-inventarios.module').then( m => m.GestionInventariosPageModule)
  },
  {
    path: 'gestion-repartos',
    loadChildren: () => import('./pages/gestion-repartos/gestion-repartos.module').then( m => m.GestionRepartosPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
