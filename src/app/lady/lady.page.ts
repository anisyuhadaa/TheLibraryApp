import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lady',
  templateUrl: './lady.page.html',
  styleUrls: ['./lady.page.scss'],
})
export class LadyPage implements OnInit {

  constructor( private alertController: AlertController) { }

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
