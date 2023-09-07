import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { GestionInventariosPageRoutingModule } from './gestion-inventarios-routing.module';

import { GestionInventariosPage } from './gestion-inventarios.page';
// import { AppModule } from 'src/app/app.module';
import { MaterialModule } from 'src/app/library/material/material.module'
import { PrimengModule } from 'src/app/library//primeng/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionInventariosPageRoutingModule,
    MaterialModule,
    PrimengModule
    
  ],
  declarations: [GestionInventariosPage]
})
export class GestionInventariosPageModule {}
