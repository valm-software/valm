import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './library/material/material.module'
import { PrimengModule } from './library/primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http'; // 2. Importa HttpClientModule

import { MenuComponent } from './components/menu/menu.component';  // ajusta la ruta según donde esté tu componente
import { ReactiveFormsModule } from '@angular/forms'; // Importa esto


@NgModule({
  declarations: [AppComponent,MenuComponent],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            BrowserAnimationsModule,
            MaterialModule,
            PrimengModule,
            ReactiveFormsModule,
            HttpClientModule
          ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
