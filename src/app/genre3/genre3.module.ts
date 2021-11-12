import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Genre3PageRoutingModule } from './genre3-routing.module';

import { Genre3Page } from './genre3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Genre3PageRoutingModule
  ],
  declarations: [Genre3Page]
})
export class Genre3PageModule {}
