// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// import { IonicModule } from '@ionic/angular';

// import { CatalogPageRoutingModule } from './catalog-routing.module';

// import { CatalogPage } from './catalog.page';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     CatalogPageRoutingModule
//   ],
//   declarations: [CatalogPage]
// })
// export class CatalogPageModule {}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CatalogPageRoutingModule } from './catalog-routing.module';
import { CatalogPage } from './catalog.page';

// import { AppModule } from 'src/app/app.module';
import { MaterialModule } from 'src/app/library/material/material.module'
import { PrimengModule } from 'src/app/library//primeng/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogPageRoutingModule,
    MaterialModule,
    PrimengModule

  ],
  declarations: [CatalogPage]
})
export class CatalogPageModule {}
