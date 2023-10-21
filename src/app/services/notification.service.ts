import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastController: ToastController) { }

  async presentToast(message: string, color: string, duration: number = 3000, buttons?: any[], cssClass?: string[]) {
    const toast = await this.toastController.create({
      message,
      duration,
      color,
      buttons,
      cssClass
    });
    await toast.present();
  }
}

// <ion-button id="open-toast">Open Toast</ion-button>
// <ion-toast
//   trigger="open-toast"
//   [duration]="3000"
//   message="Hello Styled World!"
//   class="custom-toast"
//   [buttons]="toastButtons"
// ></ion-toast>
