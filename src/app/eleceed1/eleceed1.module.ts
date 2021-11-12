import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Eleceed1PageRoutingModule } from './eleceed1-routing.module';

import { Eleceed1Page } from './eleceed1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Eleceed1PageRoutingModule
  ],
  declarations: [Eleceed1Page]
})
export class Eleceed1PageModule {}
