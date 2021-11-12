import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DarkPageRoutingModule } from './dark-routing.module';

import { DarkPage } from './dark.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DarkPageRoutingModule
  ],
  declarations: [DarkPage]
})
export class DarkPageModule {}
