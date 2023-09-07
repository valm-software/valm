import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCobrosPageRoutingModule } from './gestion-cobros-routing.module';

import { GestionCobrosPage } from './gestion-cobros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionCobrosPageRoutingModule
  ],
  declarations: [GestionCobrosPage]
})
export class GestionCobrosPageModule {}
