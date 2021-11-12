import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Genre2PageRoutingModule } from './genre2-routing.module';

import { Genre2Page } from './genre2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Genre2PageRoutingModule
  ],
  declarations: [Genre2Page]
})
export class Genre2PageModule {}
