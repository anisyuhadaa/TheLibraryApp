import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tbate1PageRoutingModule } from './tbate1-routing.module';

import { Tbate1Page } from './tbate1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tbate1PageRoutingModule
  ],
  declarations: [Tbate1Page]
})
export class Tbate1PageModule {}
