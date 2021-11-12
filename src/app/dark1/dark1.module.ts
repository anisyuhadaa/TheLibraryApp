import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dark1PageRoutingModule } from './dark1-routing.module';

import { Dark1Page } from './dark1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dark1PageRoutingModule
  ],
  declarations: [Dark1Page]
})
export class Dark1PageModule {}
