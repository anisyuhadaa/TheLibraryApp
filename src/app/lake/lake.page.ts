import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lake',
  templateUrl: './lake.page.html',
  styleUrls: ['./lake.page.scss'],
})
export class LakePage implements OnInit {

  constructor(private alertController: AlertController) { }

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
