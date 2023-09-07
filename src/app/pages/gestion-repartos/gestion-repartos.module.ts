import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionRepartosPageRoutingModule } from './gestion-repartos-routing.module';

import { GestionRepartosPage } from './gestion-repartos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionRepartosPageRoutingModule
  ],
  declarations: [GestionRepartosPage]
})
export class GestionRepartosPageModule {}
