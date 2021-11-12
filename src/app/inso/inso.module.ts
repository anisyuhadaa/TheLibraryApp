import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsoPageRoutingModule } from './inso-routing.module';

import { InsoPage } from './inso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsoPageRoutingModule
  ],
  declarations: [InsoPage]
})
export class InsoPageModule {}
