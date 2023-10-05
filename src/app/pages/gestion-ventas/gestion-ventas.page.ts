import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gestion-ventas',
  templateUrl: './gestion-ventas.page.html',
  styleUrls: ['./gestion-ventas.page.scss'],
})
export class GestionVentasPage implements OnInit {

  public tokenData: any;  // Para almacenar el resultado del token
  // private baseUrl: string = 'https://localhost:5002/api/Usuarios';  // Reemplaza con tu URL de API real
  private baseUrl: string = `${environment.apiUrl}/Usuarios`;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Código de inicialización si es necesario
  }

  obtenerTokenTest() {
    const credenciales = {
      usuario: 'victor.lm',  // Reemplaza con tu usuario real
      password: '123'  // Reemplaza con tu contraseña real
    };

    this.obtenerToken(credenciales).subscribe(
      data => {
        console.log('Token recibido:', data);
        this.tokenData = data;  // Almacenamos el resultado en una variable
      },
      error => {
        console.log('Error:', error);
      }
    );
  }

  // Simulación del método obtenerToken en el servicio de autenticación
  obtenerToken(credenciales: { usuario: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Token`, credenciales);
  }
}
