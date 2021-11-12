import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lady1PageRoutingModule } from './lady1-routing.module';

import { Lady1Page } from './lady1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lady1PageRoutingModule
  ],
  declarations: [Lady1Page]
})
export class Lady1PageModule {}
