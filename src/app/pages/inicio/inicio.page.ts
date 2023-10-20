import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router) { }  // Inyecta Router

  ngOnInit() {
  }

  // Añade las funciones para navegar
  goToLogin() {
    this.router.navigate(['/login']);  // Asegúrate de que esta ruta exista en tu configuración de rutas
  }

  goToCatalog() {
    this.router.navigate(['/catalog']);  // Asegúrate de que esta ruta exista en tu configuración de rutas
  }

}
