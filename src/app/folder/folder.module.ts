import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';


import { MaterialModule } from '../material/material.module'
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    MaterialModule,
    PrimengModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
