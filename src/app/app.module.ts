import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './library/material/material.module'
import { PrimengModule } from './library/primeng/primeng.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // 2. Importa HttpClientModule

import { MenuComponent } from './components/menu/menu.component';  // ajusta la ruta según donde esté tu componente
import { ReactiveFormsModule } from '@angular/forms';

// Componentes principales
import { ClienteRoutingModule } from './components/cliente/cliente-routing.module';
import { ClienteComponent } from './components/cliente/cliente.component';

import { CatalogoRoutingModule } from './components/catalogo/catalogo-routing.module';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

import { CobroRoutingModule } from './components/cobro/cobro-routing.module';
import { CobroComponent } from './components/cobro/cobro.component';

import { EntregaRoutingModule } from './components/entrega/entrega-routing.module';
import { EntregaComponent } from './components/entrega/entrega.component';

import { VentaRoutingModule } from './components/venta/venta-routing.module';
import { VentaComponent } from './components/venta/venta.component';


import { UsuarioRoutingModule } from './components/usuario/usuario-routing.module';
import { UsuarioComponent } from './components/usuario/usuario.component';


import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [AppComponent,MenuComponent,ClienteComponent, CatalogoComponent, CobroComponent, EntregaComponent, VentaComponent, UsuarioComponent],
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
            VentaRoutingModule,
            CatalogoRoutingModule
          ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ],
  bootstrap: [AppComponent],
})
export class AppModule {}
