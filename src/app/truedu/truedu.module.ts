import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrueduPageRoutingModule } from './truedu-routing.module';

import { TrueduPage } from './truedu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrueduPageRoutingModule
  ],
  declarations: [TrueduPage]
})
export class TrueduPageModule {}
