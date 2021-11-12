import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RmPageRoutingModule } from './rm-routing.module';

import { RmPage } from './rm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RmPageRoutingModule
  ],
  declarations: [RmPage]
})
export class RmPageModule {}
