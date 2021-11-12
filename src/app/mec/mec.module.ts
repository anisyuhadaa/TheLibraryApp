import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MecPageRoutingModule } from './mec-routing.module';

import { MecPage } from './mec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MecPageRoutingModule
  ],
  declarations: [MecPage]
})
export class MecPageModule {}
