import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dark',
  templateUrl: './dark.page.html',
  styleUrls: ['./dark.page.scss'],
})
export class DarkPage implements OnInit {

  constructor(private alertController: AlertController ) { }

  ngOnInit() {
  }
  
  async presentAlert() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Ooooops! ',
        message: 'This book has not update yet',
        buttons: ['OK']
      });
  
      await alert.present();
  
    }
}
