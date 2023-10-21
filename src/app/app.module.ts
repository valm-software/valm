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
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteRoutingModule } from './components/cliente/cliente-routing.module'; // Importa esto
import { ClienteComponent } from './components/cliente/cliente.component';
import { CobroRoutingModule } from './components/cobro/cobro-routing.module';
import { EntregaRoutingModule } from './components/entrega/entrega-routing.module';
import { UsuarioRoutingModule } from './components/usuario/usuario-routing.module';
import { VentaRoutingModule } from './components/venta/venta-routing.module'; // ajusta la ruta según donde esté tu componente

@NgModule({
  declarations: [AppComponent,MenuComponent,ClienteComponent ],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            BrowserAnimationsModule,
            MaterialModule,
            PrimengModule,
            ReactiveFormsModule,
            HttpClientModule,
            ClienteRoutingModule,
            CobroRoutingModule,
            EntregaRoutingModule,
            UsuarioRoutingModule,
            VentaRoutingModule
          ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
