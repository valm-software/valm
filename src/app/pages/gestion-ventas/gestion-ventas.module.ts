import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionVentasPageRoutingModule } from './gestion-ventas-routing.module';

import { GestionVentasPage } from './gestion-ventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionVentasPageRoutingModule
  ],
  declarations: [GestionVentasPage]
})
export class GestionVentasPageModule {}
