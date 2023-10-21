import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: any = null;

  // BehaviorSubject que almacena el menú del usuario
  public userMenu$ = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Este método se encarga de almacenar los datos del usuario en una variable privada
   * y de actualizar el BehaviorSubject del menú con los datos recibidos del servidor.
   * @param data - Datos del usuario y su menú
   */

  setUserData(data: any): void {
    console.log('setUserData is called with:', data);
    if (data && data && data.menu) {
      this.userData = data;
      console.log('userData after assignment:', this.userData);
      this.userMenu$.next(data.menu);  // Actualizamos el BehaviorSubject con el nuevo menú
    } else {
      console.error("Datos no válidos:", data);
    }
  }




  // setUserData(data: any): void {
  //   if (!data) {
  //     console.error('Data is null or undefined');
  //     return;
  //   }
  //   console.log('setUserData is called with:', data);
  //   this.userData = data;
  //   console.log('userData after assignment:', this.userData);
  //   this.userMenu$.next(data.menu);
  // }




  /**
   * Este método devuelve los datos del usuario almacenados en la variable privada.
   * @returns Los datos del usuario
   */
  getUserData(): any {
    return this.userData;
  }

  /**
   * Este método limpia los datos del usuario y el menú, estableciendo la variable
   * privada y el BehaviorSubject a null.
   */
  clearUserData(): void {
    this.userData = null;
    this.userMenu$.next(null);
  }

  /**
   * Este método verifica si el usuario está autenticado comprobando si la variable
   * privada que almacena los datos del usuario es null o no.
   * @returns true si el usuario está autenticado, false en caso contrario.
   */
  isAuthenticated(): boolean {
    return this.userData !== null;
  }

  /**
   * Este método se encarga de cerrar la sesión del usuario.
   * Realiza una petición POST al endpoint de logout y limpia los datos del usuario.
   */
  logout(): void {
    this.http.post(`${environment.apiUrl}/auth/logout`, {}).subscribe(
      () => {
        this.clearUserData();
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al cerrar sesión:', error);
      }
    );
  }
}
