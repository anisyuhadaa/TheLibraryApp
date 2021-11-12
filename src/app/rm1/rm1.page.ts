import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rm1',
  templateUrl: './rm1.page.html',
  styleUrls: ['./rm1.page.scss'],
})
export class Rm1Page implements OnInit {

  constructor(private alertController: AlertController){ }
  
  ngOnInit( ) { 

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
