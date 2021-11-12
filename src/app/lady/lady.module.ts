import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LadyPageRoutingModule } from './lady-routing.module';

import { LadyPage } from './lady.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LadyPageRoutingModule
  ],
  declarations: [LadyPage]
})
export class LadyPageModule {}
