import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service'; // Asegúrate de importar el servicio
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  apiUri = environment.apiUrl; // Asegúrate de tener tu URI en el archivo de entorno

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService, // Inyecta el AuthService aquí
    private notificationService: NotificationService

  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

  }

  ngOnInit() {
  }

  // Método para realizar el login
  doLogin() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.http.post(`${this.apiUri}/auth/login`, loginData).subscribe(
        (response: any) => {
          if (response?.status === 'success') {
            this.authService.setUserData(response.data);
            this.notificationService.presentToast('Inicio de sesión exitoso', 'success', 3000, [
              {
                text: 'Ok',
                role: 'cancel',
                handler: () => {
                  console.log('Ok clicado');
                }
              }
            ], ['custom-toast']);
            this.router.navigate(['/inicio']);
          } else {
            this.notificationService.presentToast('Error en el login: ' + response.message, 'danger', 3000, [
              {
                text: 'Cerrar',
                role: 'cancel',
                handler: () => {
                  console.log('Cerrar clicado');
                }
              }
            ], ['custom-toast']);
          }
        },
        (error) => {
          this.notificationService.presentToast('usuario o contraseña incorrecto', 'danger', 3000, [
            {
              text: 'Cerrar',
              role: 'cancel',
              handler: () => {
                console.log('Cerrar clicado');
              }
            }
          ], ['custom-toast']);
        }
      );
    } else {
      this.notificationService.presentToast('Formulario no válido', 'warning');
    }
  }


}



// Si optas por la tercera opción, asegúrate de llamar a getUserData() después de haber llamado a setUserData(), para que puedas ver los datos actualizados.
