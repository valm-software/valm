
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../auth/auth.service'; // Importa AuthService
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  // Array que almacena los elementos dinámicos del menú
  public dynamicMenuItems: any[] = [];
  public username: string | null = null;  // Nueva variable para el nombre de usuario


  // Suscripción para escuchar cambios en el menú del usuario
  private menuSubscription!: Subscription;

  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private authService: AuthService // Inyectamos AuthService
  ) {}

  /**
   * Se suscribe al BehaviorSubject del menú en AuthService
   * para actualizar el menú dinámicamente.
   */
  ngOnInit() {
    this.menuSubscription = this.authService.userMenu$.subscribe(menu => {
      if (menu) {
        this.dynamicMenuItems = Object.keys(menu);
      } else {
        this.dynamicMenuItems = [];  // Vacía el menú si el usuario cierra la sesión
      }
      const userData = this.authService.getUserData();
      if (userData && userData.username) {
        this.username = userData.username;
      }
    });
  }

  /**
   * Cancela la suscripción al BehaviorSubject del menú cuando
   * el componente se destruye para evitar fugas de memoria.
   */
  ngOnDestroy() {
    this.menuSubscription.unsubscribe();
  }

  /**
   * Navega a una ruta específica y cierra el menú lateral.
   * @param path - La ruta a la que se debe navegar
   */
  goTo(path: string) {
    this.router.navigate([path]);
    this.menuCtrl.close();
  }

  /**
   * Cierra la sesión del usuario, vacía el menú y redirige
   * al usuario a la página de inicio de sesión.
   */
  logout() {
    this.authService.logout();
    this.menuCtrl.close();
  }

  public isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  public menuIcons: { [key: string]: string } = {
    'COBROS': 'wallet',
    'ENTREGAS': 'paper-plane',
    'USUARIOS': 'person',
    'CLIENTES': 'people',
    'VENTAS': 'cash',
    'PROVEEDORES': 'business',
    'CATALOGO': 'list',
    'LOGOUT': 'log-out',
    'LOGIN': 'log-in'
  };

}

