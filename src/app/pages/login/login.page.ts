import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service'; // Asegúrate de importar el servicio

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
    private authService: AuthService // Inyecta el AuthService aquí

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
          console.log('Response from server:', response);
          if (response?.status === 'success') {
            // Usa el AuthService para guardar la información del usuario
            this.authService.setUserData(response.data);
            console.log("Datos del usuario: ", this.authService.getUserData()); // imprime los datos del usuario

            // Redirigir al usuario a la página principal o donde desees
            this.router.navigate(['/inicio']);
          } else {
            // Manejo de errores
            console.error('Error en el login:', response.message);
          }
        },
        (error) => {
          console.error('Error HTTP:', error);
        }
      );
    }
  }
}



// Si optas por la tercera opción, asegúrate de llamar a getUserData() después de haber llamado a setUserData(), para que puedas ver los datos actualizados.
