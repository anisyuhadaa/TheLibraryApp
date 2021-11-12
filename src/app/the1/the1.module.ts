import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { The1PageRoutingModule } from './the1-routing.module';

import { The1Page } from './the1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    The1PageRoutingModule
  ],
  declarations: [The1Page]
})
export class The1PageModule {}
