import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EleceedPageRoutingModule } from './eleceed-routing.module';

import { EleceedPage } from './eleceed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EleceedPageRoutingModule
  ],
  declarations: [EleceedPage]
})
export class EleceedPageModule {}
