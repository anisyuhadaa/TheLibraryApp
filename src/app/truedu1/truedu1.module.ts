import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Truedu1PageRoutingModule } from './truedu1-routing.module';

import { Truedu1Page } from './truedu1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Truedu1PageRoutingModule
  ],
  declarations: [Truedu1Page]
})
export class Truedu1PageModule {}
