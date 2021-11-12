import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Solo1PageRoutingModule } from './solo1-routing.module';

import { Solo1Page } from './solo1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Solo1PageRoutingModule
  ],
  declarations: [Solo1Page]
})
export class Solo1PageModule {}
