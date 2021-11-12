import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoPageRoutingModule } from './reco-routing.module';

import { RecoPage } from './reco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoPageRoutingModule
  ],
  declarations: [RecoPage]
})
export class RecoPageModule {}
