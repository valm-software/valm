import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inventarios', url: '/gestion-inventarios', icon: 'receipt' },
    { title: 'Clientes', url: '/gestion-clientes', icon: 'people' },
    { title: 'ventas', url: '/gestion-ventas', icon: 'briefcase' },
    { title: 'Repartos', url: '/gestion-repartos', icon: 'boat' },
    { title: 'cobros', url: '/gestion-cobros', icon: 'wallet' },
    // { title: 'inicio', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Catalogo'];
  constructor() {}
}
