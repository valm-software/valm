// app.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService  // Inyecta AuthService
  ) {}

  apiUri = environment.apiUrl;

  async ngOnInit() {
    try {
      const sessionStatus = await this.authService.checkSession().toPromise();
      // console.log("Estado de la sesión:", sessionStatus);  // <-- Aquí
      if (sessionStatus.status === 'not_authenticated') {
        this.router.navigate(['/login']);
      }
      // En caso contrario, el usuario ya está autenticado y AuthService se ha actualizado con los nuevos datos
    } catch (error) {
      console.error('Ocurrió un error al verificar la sesión:', error);
      this.router.navigate(['/login']);
    }
  }
}
