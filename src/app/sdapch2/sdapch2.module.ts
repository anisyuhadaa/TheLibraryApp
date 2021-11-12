import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sdapch2PageRoutingModule } from './sdapch2-routing.module';

import { Sdapch2Page } from './sdapch2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sdapch2PageRoutingModule
  ],
  declarations: [Sdapch2Page]
})
export class Sdapch2PageModule {}
