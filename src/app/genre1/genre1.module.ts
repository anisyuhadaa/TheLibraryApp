import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Genre1PageRoutingModule } from './genre1-routing.module';

import { Genre1Page } from './genre1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Genre1PageRoutingModule
  ],
  declarations: [Genre1Page]
})
export class Genre1PageModule {}
