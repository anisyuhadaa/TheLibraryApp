import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Genre4PageRoutingModule } from './genre4-routing.module';

import { Genre4Page } from './genre4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Genre4PageRoutingModule
  ],
  declarations: [Genre4Page]
})
export class Genre4PageModule {}
