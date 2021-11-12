import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rm1PageRoutingModule } from './rm1-routing.module';

import { Rm1Page } from './rm1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rm1PageRoutingModule
  ],
  declarations: [Rm1Page]
})
export class Rm1PageModule {}
