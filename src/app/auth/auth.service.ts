import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = `${environment.apiUrl}/Usuarios`;

  constructor(private http: HttpClient) { }

  nuevoUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/NuevoUsuario`, usuario);
  }

  obtenerToken(credenciales: { usuario: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Token`, credenciales);
  }

  refrescarToken(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/RefreshToken`, {});
  }
}
