import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sdapch1PageRoutingModule } from './sdapch1-routing.module';

import { Sdapch1Page } from './sdapch1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sdapch1PageRoutingModule
  ],
  declarations: [Sdapch1Page]
})
export class Sdapch1PageModule {}
