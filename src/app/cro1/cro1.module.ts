import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cro1PageRoutingModule } from './cro1-routing.module';

import { Cro1Page } from './cro1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cro1PageRoutingModule
  ],
  declarations: [Cro1Page]
})
export class Cro1PageModule {}
