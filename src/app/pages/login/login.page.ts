import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

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
    private router: Router
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
            // Aquí podrías guardar la estructura del menú en algún almacenamiento local o en un servicio
            // Por ejemplo: localStorage.setItem('menu', JSON.stringify(response.data.menu));
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
