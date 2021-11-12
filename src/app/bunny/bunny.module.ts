import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BunnyPageRoutingModule } from './bunny-routing.module';

import { BunnyPage } from './bunny.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BunnyPageRoutingModule
  ],
  declarations: [BunnyPage]
})
export class BunnyPageModule {}
